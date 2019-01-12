module.exports = (api) => {
  const presets = [
    '@babel/env',
    '@babel/react',
    '@babel/flow',
    [
      'env',
      {
        targets: { browsers: ['last 2 versions', 'safari >= 7'] },
        useBuiltIns: false
      }
    ]
  ];
  const plugins = [
    'react-hot-loader/babel'
  ];

  api.cache.never();

  return {
    presets,
    plugins
  };
};
