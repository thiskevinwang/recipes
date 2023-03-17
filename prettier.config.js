module.exports = {
  tailwindConfig: './tailwind.config.js',
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^nextjs-components',
    '^@server/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require('prettier-plugin-tailwindcss')],
  pluginSearchDirs: false,
};
