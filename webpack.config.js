const path = require('path');
const autoprefixer = require('autoprefixer');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: (process.env.NODE_ENV || 'developement'),
  entry: './client/main.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react']
            ]}
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader:'style-loader'
          }, 
          {
            loader:'css-loader'
          },
          {
            loader:'sass-loader'
          }, 
          { 
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            },
          },
        ],       
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Development',
      template: './index.html'
    })
  ],
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: '/dist',
      directory: path.resolve(__dirname, '/dist'),
    },
    proxy: { '/api': 'http://localhost:3000'}
  },
};