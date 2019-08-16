const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const webpackDevServer = require('webpack-dev-server');
// console.log(CleanWebpackPlugin);

// const options = {
//   contentBase: 'dist',
//   hot: true
// }


module.exports = {
  context: path.resolve(__dirname, '../'),
  mode: 'development',
  // watch: true,
  // target: 'node',
  entry: {
    // app:'./src/app.js',
    main: './src/main.js'
  },
  devtool: 'inline-source-map',
  devServer: {//开发服务器 编译目标文件夹，编译后是否热启动
    contentBase: 'dist',
    hot:true
  },
  module: {
    rules: [//这里是loader配置 loader 被用于转换某些类型的模块
      {//告诉webpack 当遇到css结尾的文件 需要使用use中的方法解析一下
        test: /\.css$/,
        use: [
          'style-loader',
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
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(), //修补作用
    new webpack.HotModuleReplacementPlugin(),//内置热替换插件
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'public/favicon.png',
      inject: true
    })//创建插件，应用对象
  ],
  output: {
    filename: '[name].js',
    path: path.resolve('dist')
  }
};