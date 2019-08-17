const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
require('babel-polyfill');

// const webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, '../'),
  // mode: 'development',
  // watch: true,
  // target: 'node',
  entry: {
    main: ['babel-polyfill','./src/main.js']
  },
  // devtool: 'inline-source-map',
  // devServer: {//开发服务器 编译目标文件夹，编译后是否热启动
  //   contentBase: 'dist',
  //   hot:true
  // },
  module: {
    rules: [//这里是loader配置 loader 被用于转换某些类型的模块
      {//告诉webpack 当遇到css结尾的文件 需要使用use中的方法解析一下
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              reloadAll: true,
            },
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['es2015']}},
    ]
  },
  plugins: [
    // new webpack.NamedModulesPlugin(), //修补作用
    // new webpack.HotModuleReplacementPlugin(),//内置热替换插件
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'public/favicon.png',
      inject: true
    }),//创建插件，应用对象
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('dist')
  },
  optimization: {//webpack4以后删除了CommonsChunkPlugin 处理重复文件的方法现在改用这个
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}
