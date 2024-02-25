import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

/**
 * @see https://storybook.js.org/docs/essentials/toolbars-and-globals
 */
export const globalTypes = {
  locale: {
    name: "Locale",
    defaultValue: "en-US",
    description: "Select the language",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en-US", title: "English" },
        { value: "sv-SE", title: "Svenska" },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
