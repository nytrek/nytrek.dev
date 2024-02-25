import type { Meta, StoryObj } from "@storybook/react";

import { About } from "./about";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "About",
  component: About,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  /**
   * @see https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
   */
  parameters: {
    nextjs: {
      router: {
        locale: "en-US",
      },
    },
  },
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    className:
      "bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white p-6 rounded-lg border border-zinc-300",
  },
};
