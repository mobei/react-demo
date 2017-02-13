var path = require('path');
var webpack = require('webpack');

// 编译后自动打开浏览器
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');

// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules = path.resolve(__dirname, 'node_modules');

/**
 * 标识开发环境和生产环境
 * @type {webpack.DefinePlugin}
 */
var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        contentBase: './build',
        port: 8888,
        progress: true,
        stats: { colors: true },
        proxy: {
            '/api/*': {
                target: 'http://op.mobei.local',
                secure: false,
                changeOrigin: true
            }
        },
    },
    entry: {
        index: [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8888',
            path.resolve(__dirname, 'app/index.js')
        ],
        vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
    },
    resolve: {
        extension: ['', '.jsx', '.js', '.json'],
        // 提高webpack搜索的速度
        alias: {
            // 'react/addons': path.join(node_modules, 'react/dist/react-with-addons.min.js'),
            // 'react/lib': path.join(node_modules, 'react/lib'),
            // 'react-highcharts': path.join(node_modules, 'react-highcharts/dist/bundle/ReactHighcharts.js'),
            // 'antd/lib': path.join(node_modules, 'antd/lib'),
            // antd: path.join(node_modules, 'antd/dist/antd.min.js')
        }
    },
    devtool: 'source-map',
    'display-error-details': true,
    // 使用externals可以将react分离，然后用<script>单独将react引入
    externals: [],
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'babel',
            exclude: path.resolve(__dirname, 'node_modules')
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader") //不能使用热替换
            // loaders: ["style", "css?sourceMap"]
        }, {
            test: /\.scss/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader") //不能使用热替换
            // loaders: ["style", "css?sourceMap", "sass?sourceMap"] //不能正确加载静态图片
        }, {
            test: /\.(png|jpg)$/,
            // loader: 'url?limit=8192&name=images/[name].[ext]' //不能正确加载图片  file-loader CSS原因
            loader: 'url?name=images/[name].[ext]'
        }, {
            test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000"
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        definePlugin,
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),//分离第三方库,需要多写一个，manifest
        new HtmlWebpackPlugin({
            title: 'udesk demo',
            template: './app/index.html',
        }),
        new ExtractTextPlugin("main.css", {//分离css
            allChunks: true,
            disable: false
        })
    ]
};
