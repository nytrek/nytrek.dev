import type { StorybookConfig } from "@storybook/nextjs";
import remarkGfm from "remark-gfm";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

/**
 * @see https://storybook.js.org/docs/writing-docs/mdx
 * @see https://stackoverflow.com/questions/71677948/how-to-add-typescript-paths-to-storybook
 */
const config: StorybookConfig = {
  webpackFinal: async (config) => {
    config.resolve!.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
