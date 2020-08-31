module.exports = function(api)
{
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-typescript'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
            '.story.tsx'
          ],
          root: ['./'],
          alias: {
            assets: './assets',
            src: './src',
            hooks: './src/hooks',
            container: './src/container',
            contexts: './src/contexts',
            atoms: './src/components/atoms',
            molecules: './src/components/molecules',
            organisms: './src/components/organisms',
            templates: './src/components/templates'
          }
        }
      ]
    ]
  };
};
