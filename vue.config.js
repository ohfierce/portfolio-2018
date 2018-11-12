// vue.config.js

const ImageminPlugin     = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const imageminMozjpeg    = require('imagemin-mozjpeg');

module.exports = {
  configureWebpack: {
    plugins: [
      // new CopyWebpackPlugin([{
      //   from: 'src/assets/images', // FROM
      //   to: 'dist/images', // TO
      // }]),
    
      // new ImageminPlugin({
      //   test: /\.(jpe?g|png|gif)$/i,
      //   pngquant: {
      //       quality: '65-80'
      //   },
      //   plugins: [
      //       imageminMozjpeg({
      //           quality: 65,
      //           //Set the maximum memory to use in kbytes
      //           maxMemory: 1000 * 512
      //       })
      //     ]
      // }),
    ]
  }
}