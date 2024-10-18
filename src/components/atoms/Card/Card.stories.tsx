import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta = {
  title: "Atoms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
  argTypes: {
    //type: { control: "color" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Image />
        <Card.Badge cardBadge="Learning" />
        <Card.PubDate cardPubDate={`Published 15 Oct 2024`} />
        <Card.Title cardTitle="HTML &amp; CSS" />
        <Card.Content cardContent="lorem ipsum dolor sit teut tadhg tell me something that i don't know" />
        <Card.Avatar avatarName="John Doe" />
      </>
    ),
  },
};
