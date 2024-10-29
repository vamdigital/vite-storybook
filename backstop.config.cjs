const fs = require("fs");

const environment = process.env.ENVIRONMENT || "localhost";
const baseURL =
  environment === "localhost" ? "http://localhost:6006" : "http://sb-prod:6006";
// Read the index.json file from the storybook-static folder

const storybookIndex = JSON.parse(
  fs.readFileSync("./storybook-static/index.json", "utf8"),
);

// Map each story to a BackstopJS scenario
const scenarios = Object.values(storybookIndex.entries)
  .filter((story) => story.type !== "docs")
  .map((story) => ({
    label: story.name, // The label for the test
    url: `${baseURL}/iframe.html?id=${story.id}`, // The URL for the story's iframe
    selectors: ["#storybook-root"], // What part of the page to capture
    delay: 500, // Wait before taking the screenshot (useful for animations, loading, etc.)
  }));

module.exports = {
  id: "storybook-test",
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
  scenarios, // Use the dynamically generated scenarios
  paths: {
    bitmaps_reference: "backstop_data/bitmaps_reference",
    bitmaps_test: "backstop_data/bitmaps_test",
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
  debug: false, // Set to true to enable more logs
  debugWindow: false, // Set to true to see the browser window
};
