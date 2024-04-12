import { FormLabel } from "@/components/form-label";
import { Input } from "@/components/input";
import { VStack } from "@/styled-system/jsx";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

type Story = StoryObj<typeof Input>;

export const Base: Story = {
  args: {
    placeholder: "placeholder text",
  },
};

export const WithLabel: Story = {
  render: function Render(args) {
    return (
      <VStack gap={2} alignItems="flex-start">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" {...args} />
      </VStack>
    );
  },
};

export const WithError: Story = {
  render: function Render(args) {
    return (
      <VStack gap={2} alignItems="flex-start">
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" error {...args} />
      </VStack>
    );
  },
};

export default meta;
