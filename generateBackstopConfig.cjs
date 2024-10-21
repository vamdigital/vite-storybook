const fs = require("fs");
const axios = require("axios");

// Function to get all stories from storybook
async function getStorybookStories() {
  try {
    const response = await axios.get("http://localhost:6006/index.json");
    const stories = response.data.entries;

    const scenarios = Object.keys(stories)
      .filter((story) => !story.includes("docs"))
      .map((storyId) => {
        const story = stories[storyId];
        return {
          label: story.name,
          url: `http://sb-prod:6006/iframe.html?id=${story.id}`,
          selectors: ["#storybook-root"],
          misMatchThreshold: 0.01,
          delay: 500, // Adjust delay to ensure content has loaded
        };
      });
    return scenarios;
  } catch (error) {
    console.log(`Error fetching stories: ${error}`);
    return [];
  }
}

// Generate Backstop config with dynamic scenarios
async function generateBackstopConfig() {
  const scenarios = await getStorybookStories();
  const config = {
    id: "storybook_visual_tests",
    viewports: [
      {
        name: "mobile",
        width: 375,
        height: 667,
      },
      {
        name: "tablet",
        width: 1024,
        height: 768,
      },
      {
        name: "desktop",
        width: 1920,
        height: 1080,
      },
    ],
    scenarios, // Use the fetched scenarios here
    paths: {
      bitmaps_reference: "backstop_data/bitmaps_reference",
      bitmaps_test: "backstop_data/bitmaps_test",
      engine_scripts: "backstop_data/engine_scripts",
      html_report: "backstop_data/html_report",
      ci_report: "backstop_data/ci_report",
    },
    report: ["browser", "CI"],
    engine: "puppeteer",
    engineOptions: {
      disableFontsAntialiasing: true,
      timeout: 30000,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--headless=false",
        "--disable-gpu",
      ],
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false,
  };

  // write the config to backstop.config.cjs file
  fs.writeFileSync(
    "backstop.generated.config.cjs",
    `module.exports = ${JSON.stringify(config, null, 2)}`,
  );
  console.log("Backstop configuration has been generated!");
}

// Run the function to generate the Backstop config
generateBackstopConfig();
