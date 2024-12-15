import type { Meta, StoryObj } from '@storybook/react';

import MenuButton from './menu-button';

const meta = {
  component: MenuButton,
} satisfies Meta<typeof MenuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};