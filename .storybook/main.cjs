const path = require('path');
const { loadConfigFromFile } = require('vite');
const react = require('@vitejs/plugin-react');
const svgrPlugin = require('vite-plugin-svgr');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'));

    config.plugins = config.plugins.filter(
      plugin => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')),
    );

    config.plugins.push(
      react({
        exclude: [/\.stories\.tsx?$/, /node_modules/],
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      svgrPlugin({
        svgrOptions: {
          icon: true,
        },
      }),
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };

    return config;
  },
};
