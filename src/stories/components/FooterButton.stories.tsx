import FooterButton from "@/components/contents/footer-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/FooterButton",
  component: FooterButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FooterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  render: () => <FooterButton />,
};
