import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { merge } from 'webpack-merge';
import common from './webpack.base.config';

const config: Configuration = {
    mode: "production",
    output: {
      path: path.resolve(__dirname, "..","dist"),
      filename: "[name].[contenthash].js",
      publicPath: "",
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new CleanWebpackPlugin(),
    ],
  };
  
  export default merge(config, common);