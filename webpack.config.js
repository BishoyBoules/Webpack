const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  watch: false,
  entry: {
    'style': './sass/main.scss',
    'main': './src/index.js',
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
    use: [
      {
    loader: MiniCssPlugin.loader,
},
    {
        loader: 'css-loader'
    },
    {
        loader: 'sass-loader',
    },
    {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                plugins: [
                    [
                        "autoprefixer",
                    ],
                ],
            },
        },
    },

]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ( {
      inject: false,
      template: path.resolve(__dirname, 'public/index.html'),
    }),
   new MiniCssPlugin ( {
    filename: "[name].css",
    chunkFilename: "[name].css"
  }),
  ],
};