require('./check-versions')()
require('shelljs/global')

var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var webpack = require('webpack')
var ora = require('ora')
var webpackConfig = require('./webpack.dev.conf')

var compiler = webpack(webpackConfig)

var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)

var spinner = ora('building for development...')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

var compiler = webpack(webpackConfig)

module.exports = compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})
