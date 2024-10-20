import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";

const meta = {
  title: "Atoms/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    //type: { control: "color" },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: "success",
    children: "Success Success Message 🎉",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    children: "Information Message ℹ️",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    children: "Warning Message ⚠️",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    children: "Error Message 🔴",
  },
};
