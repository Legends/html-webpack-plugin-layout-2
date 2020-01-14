const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    writeToDisk: true
  },
  // mode: "development",
  // devtool: 'source-map', 
  optimization: {
    // usedExports: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  output: {
    /**
     * With zero configuration,
     *   clean-webpack-plugin will remove files inside the directory below
     */
    path: path.resolve(process.cwd(), 'dist'),
  },
  entry: {
    home: path.resolve('./src/pages/home/entry.js'),
    about: path.resolve('./src/pages/about/entry.js')
  },
  module: {
    rules: [
      { test: /\.ejs$/, loader: 'ejs-loader' },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new HtmlWebpackPlugin({
      template: "src/layout.js",
      page: 'home/home',
      level1: 'Home',
      level2: 'Private',
      level3: 'Sports',
      dummy: "some string",
      filename: 'index.html',
      title: 'Home',
      chunks: ['home'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: "src/layout.js",
      page: 'about/about',
      level1: 'Home',
      level2: 'Business',
      level3: 'Coding',
      dummy: "some string",
      filename: 'about.html',
      title: 'About',
      chunks: ['about'],
      filename: 'about.html'
    }),
  ]
};
