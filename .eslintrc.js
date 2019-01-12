module.exports = {
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'plugin:flowtype/recommended'],
  plugins: ['flowtype', 'react', 'jsx-a11y', 'prettier', 'babel', 'import', 'html'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      // globalReturn: true,
      // generators: false,
      // objectLiteralDuplicateProperties: false,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
    // allowImportExportEverywhere: true
  },
  settings: {
    'import/resolver': { webpack: { config: './webpack.config.js' } },
    'import/extensions': [
      '.js',
      '.jsx'
    ],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$'
    ],
    react: {
      // Regex for Component Factory to use,
      // default to "createReactClass"
      createClass: 'createReactClass',
      // Pragma to use, default to "React"
      pragma: 'React',
      // React version, default to the latest React stable release
      version: '16.6.3',
      // Flow version
      flowVersion: '7.0.0',
    },
    // The names of any functions used to wrap the
    // propTypes object, e.g. `forbidExtraProps`.
    // If this isn't set, any propTypes wrapped in
    // a function will be skipped.
    propWrapperFunctions: ['forbidExtraProps'],
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx']
      }
    ],
    'prettier/prettier': 'error',
    // 'max-len': ['error', 80],
    // 'arrow-parens': ['error', 'always'],
    // indent: ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    // semi: ['error', 'always'],
    // 'comma-dangle': 0,
    // 'prefer-destructuring': 0,
  }
};
