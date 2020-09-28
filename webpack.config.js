const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HandlebarsPlugin = require('handlebars-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
    },
    {
      test: /\.(woff|woff2)$/,
      use: [
        {
          loader: 'file-loader'
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new HandlebarsPlugin({
      entry: path.join(process.cwd(), 'src', '*.hbs'),
      output: path.join(process.cwd(), 'dist', '[name].html'),
      partials: [
        path.join(process.cwd(), 'src', 'partials', '**', '*.hbs')
      ]
    })
  ]
};
