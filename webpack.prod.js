const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const MiniCssPlugin = require("mini-css-extract-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
});

/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/

const prodConfig = {
  /** "mode"
   * the environment - development, production, none. tells webpack
   * to use its built-in optimizations accordingly. default is production
   */
  mode: "production",
  /** "entry"
   * the entry point
   */
  entry: "./index.jsx",
  output: {
    /** "path"
     * the folder path of the output file
     */
    path: path.resolve(__dirname, "build"),
    /** "filename"
     * the name of the output file
     */
    filename: "main.js",
  },
  /** "target"
   * setting "node" as target app (server side), and setting it as "web" is
   * for browser (client side). Default is "web"
   */
  target: "web",
  resolve: {
    /** "extensions"
     * If multiple files share the same name but have different extensions, webpack will
     * resolve the one with the extension listed first in the array and skip the rest.
     * This is what enables users to leave off the extension when importing
     */
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    /** "rules"
     * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx'
     * file inside of a require()/import statement, use the babel-loader to transform it before you
     * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from
     * being searched"
     */
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            // We configure 'MiniCssExtractPlugin'
            loader: MiniCssPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              // Allows to configure how many loaders
              // before css-loader should be applied
              // to @import(ed) resources
              importLoaders: 1,
              localsConvention: "camelCase",
              // Create source maps for CSS files
              sourceMap: true,
            },
          },
          {
            // PostCSS will run before css-loader and will
            // minify and autoprefix our CSS rules.
            loader: "postcss-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [htmlWebpackPlugin],
};

module.exports = merge(commonConfig, prodConfig);
