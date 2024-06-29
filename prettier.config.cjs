const prettierConfig = require('@kouts/eslint-config/prettier.config.js')

prettierConfig.plugins = Array.isArray(prettierConfig.plugins) ? prettierConfig.plugins : []
prettierConfig.plugins.push('prettier-plugin-tailwindcss')

prettierConfig.tabWidth = 4;

module.exports = prettierConfig
