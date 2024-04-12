import { FormLabel } from "../components/form-label";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormLabel> = {
  title: "Components/FormLabel",
  component: FormLabel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof FormLabel>;

export const Base: Story = {
  args: {
    children: "label text",
    htmlFor: "label-id",
    required: true,
  },
};

export default meta;
