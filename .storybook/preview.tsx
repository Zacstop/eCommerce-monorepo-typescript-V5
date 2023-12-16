import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import { QueryClient, QueryClientProvider } from "react-query";
import { lightTheme } from '../design-system/components/themes/lightTheme';
import { darkTheme } from '../design-system/components/themes/darkTheme';
import i18n from '../packages/i18n/i18n'; // i18n 설정 파일 경로
import { GlobalStyle } from "../design-system/components/styles/globalStyles";

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const queryClient = new QueryClient();
      const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme;

      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
              <Story {...context} />
            </I18nextProvider>
          </QueryClientProvider>
        </ThemeProvider>
      );
    }
  ]
};

export default preview;
