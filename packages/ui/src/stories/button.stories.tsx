import { Button } from "@/components/button";
import { Smile } from "lucide-react";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    children: "Click me",
    variant: "solid",
    size: "md",
  },
  argTypes: {
    variant: {
      options: ["solid", "outline"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    variant: "solid",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const WithDecoration: Story = {
  args: {
    size: "lg",
  },
  render: function Render(args) {
    return (
      <Button {...args}>
        <Smile size={18} />
        Button
      </Button>
    );
  },
};
