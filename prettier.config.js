module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "lf",
  overrides: [
    {
      files: "*.ts",
      options: {
        parser: "typescript",
      },
    },
    {
      files: "*.html",
      options: {
        parser: "html",
        htmlWhitespaceSensitivity: "css",
      },
    },
    {
      files: "*.scss",
      options: {
        parser: "scss",
      },
    },
  ],
};
