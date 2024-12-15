import type { Meta, StoryObj } from '@storybook/react';

import SearchReferences from './search-references';

const meta = {
  component: SearchReferences,
} satisfies Meta<typeof SearchReferences>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};