const { loadConfigFromFile, mergeConfig } = require('vite');

module.exports = {
  async viteFinal(config, { configType }) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, '../vite.config.ts'),
    );
    return mergeConfig(config, {
      ...userConfig,
      resolve: {
        alias: { '@/*': path.resolve(__dirname, '../src/*') },
      },
    });
  },
  // ... other options here
};
