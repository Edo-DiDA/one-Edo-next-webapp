import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumbs from "@/components/contents/breadcrumbs";
import { BreadcrumbType } from "@/types/content";

const mocktems: BreadcrumbType[] = [
  {
    id: 1,
    page: {
      id: 1,
      name: "Home",
      slug: "home",
      documentId: "documentId-100",
    },
  },
  {
    id: 2,
    page: {
      id: 2,
      name: "work",
      slug: "work",
      documentId: "documentId-200",
    },
  },
];

const meta = {
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OneStep: Story = {
  args: {
    items: [
      {
        id: 1,
        page: {
          id: 1,
          name: "Home",
          slug: "home",
          documentId: "documentId-100",
        },
      },
      {
        id: 2,
        page: {
          id: 2,
          name: "Work",
          slug: "work",
          documentId: "mock",
        },
      },
    ],
  },
  render: (args) => <Breadcrumbs {...args} />,
};

// export const TwoSteps: Story = {
//   args: {
//     items: mocktems,
//   },
// };
