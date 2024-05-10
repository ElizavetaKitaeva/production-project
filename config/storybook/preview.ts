import type { Preview } from "@storybook/react";
import React from "react";
import "../../src/app/styles/index.scss";
import { ThemeDecorator } from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
