import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
<<<<<<< HEAD
    '../design-system/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../design-system/app-front/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../design-system/cms-front/**/**/*.stories.@(js|jsx|ts|tsx|mdx)',
=======
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
>>>>>>> 07f93628a68fb392a9708a1182b10a0ba88eded6
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
<<<<<<< HEAD
  webpackFinal: async (config) => {
    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
  },
};

=======
};
>>>>>>> 07f93628a68fb392a9708a1182b10a0ba88eded6
export default config;
