module.exports = {
  "id": "storybook_visual_tests",
  "viewports": [
    {
      "name": "mobile",
      "width": 375,
      "height": 667
    },
    {
      "name": "tablet",
      "width": 1024,
      "height": 768
    },
    {
      "name": "desktop",
      "width": 1920,
      "height": 1080
    }
  ],
  "scenarios": [
    {
      "label": "Success",
      "url": "http://localhost:6006/iframe.html?id=atom-alert--success",
      "selectors": [
        "#storybook-root"
      ],
      "misMatchThreshold": 0.01,
      "delay": 500
    },
    {
      "label": "Info",
      "url": "http://localhost:6006/iframe.html?id=atom-alert--info",
      "selectors": [
        "#storybook-root"
      ],
      "misMatchThreshold": 0.01,
      "delay": 500
    },
    {
      "label": "Warning",
      "url": "http://localhost:6006/iframe.html?id=atom-alert--warning",
      "selectors": [
        "#storybook-root"
      ],
      "misMatchThreshold": 0.01,
      "delay": 500
    },
    {
      "label": "Error",
      "url": "http://localhost:6006/iframe.html?id=atom-alert--error",
      "selectors": [
        "#storybook-root"
      ],
      "misMatchThreshold": 0.01,
      "delay": 500
    },
    {
      "label": "Primary",
      "url": "http://localhost:6006/iframe.html?id=atom-button--primary",
      "selectors": [
        "#storybook-root"
      ],
      "misMatchThreshold": 0.01,
      "delay": 500
    },
    {
      "label": "Secondary",
      "url": "http://localhost:6006/iframe.html?id=atom-button--secondary",
      "selectors": [
        "#storybook-root"
      ],
      "misMatchThreshold": 0.01,
      "delay": 500
    },
    {
      "label": "Large",
      "url": "http://localhost:6006/iframe.html?id=atom-button--large",
      "selectors": [
        "#storybook-root"
      ],
      "misMatchThreshold": 0.01,
      "delay": 500
    },
    {
      "label": "Small",
      "url": "http://localhost:6006/iframe.html?id=atom-button--small",
      "selectors": [
        "#storybook-root"
      ],
      "misMatchThreshold": 0.01,
      "delay": 500
    }
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": [
    "browser",
    "CI"
  ],
  "engine": "puppeteer",
  "asyncCaptureLimit": 5,
  "asyncCompareLimit": 50,
  "debug": false,
  "debugWindow": false
}