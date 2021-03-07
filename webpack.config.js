const nodeExternals = require('webpack-node-externals');
const path = require('path');
module.exports = function (options) {
  return {
    ...options,
    mode: 'development',
    entry: [options.entry],
    externals: [
      nodeExternals({
        modulesDir: path.resolve(__dirname, './node_modules'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      symlinks: false,
      alias: {
        /*
         * Specify the modules you want to resolve here
         *
         */
      },
    },
    // output: {
    //   path: path.join(__dirname, 'dist'),
    //   filename: 'main.js',
    // },
  };
};
