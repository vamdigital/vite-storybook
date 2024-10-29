import type { Preview } from "@storybook/react";
import "../src/tailwind.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "Dark",
      values: [
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#F7F9F2" },
        { name: "Maroon", value: "#F00000" },
      ],
    },
  },
  globals: {
    backgrounds: { value: "light" },
  },
};

export default preview;
