import type { Meta, StoryObj } from "@storybook/react";

import { Projects } from "./projects";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Projects",
  component: Projects,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  /**
   * @see https://storybook.js.org/blog/integrate-nextjs-and-storybook-automatically/
   */
  parameters: {
    nextjs: {
      router: {},
    },
  },
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  /**
   * @see https://storybook.js.org/docs/essentials/toolbars-and-globals
   */
  render: (_args, { globals: { locale } }) => {
    return (
      <Projects
        className="rounded-lg border border-zinc-300 bg-white p-6 text-zinc-900 dark:bg-zinc-900 dark:text-white"
        locale={locale}
      />
    );
  },
};
