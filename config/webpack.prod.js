const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // new UglifyJSPlugin({ //这个压缩方式不支持es6语法 压缩时会进行报错
    //   sourceMap: true

    // }),
//     在开发模式中，我们通常有一个 assets/ 文件夹，它往往存放在和首页一个级别的目录下。这样是挺方便；但是如果在生产环境下，你想把这些静态文件统一使用CDN加载，那该怎么办？
// 想要解决这个问题，你可以使用有着悠久历史的环境变量。比如说，我们设置了一个名为 ASSET_PATH 的变量
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify('production')
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
      }),
    ]
  }
});