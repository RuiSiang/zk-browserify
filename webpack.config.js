const path = require('path')
module.exports = {
  entry: './app.js',
  output: {
    filename: 'zokrates.bundle.js',
    path: path.join(__dirname, './lib'),
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: 'default'
  },
  experiments: {
    syncWebAssembly: true
  }
};