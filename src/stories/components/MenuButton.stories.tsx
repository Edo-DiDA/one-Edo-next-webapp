import type { Meta, StoryObj } from "@storybook/react";
import MenuButton from "@/components/contents/menu-button";

const meta = {
  title: "Components/MenuButton",
  component: MenuButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    text: "Work",
    action: () => {},
  },
};
