


// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintWebpackConfig = require('eslint-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {join} = require('path');
module.exports = {
    mode:"development",
    entry:'./src/main.js',
    output: {
        path: join(__dirname, 'lib'),
        filename: 'index.js',
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, 'public/index.html')
        }),

        new EslintWebpackConfig({
            context: join(__dirname, 'src/')
        }),
        // 请确保引入这个插件！
        new VueLoaderPlugin(),

        new MiniCssExtractPlugin()
    ],
    devServer: {
        open: true,
        port: 30000
    },
    module: {
        rules: [
           {
            test: /\.css/i,
            use:[MiniCssExtractPlugin.loader,'css-loader']
           },
           {
            test: /\.less/i,
            use:["style-loader", "css-loader", "less-loader"]
           },
           {
            test:/\.(png|jpeg|gif)/i,
            type: "asset",
            parser: {
                dataUrlCondition: {
                    // maxSize:8 * 1024
                    maxSize: 2 * 1024
                }
            },
            generator: {
                filename:"images/[hash:6][ext]"
            }
           },
           {
            test:/\.(eot|svg|ttf|woff|woff2)$/i,
            type:"asset/resources",
            generator: {
                filename:'fonts/[hash:6][ext]'
            }
           },
           {
            test:/\.js$/i,
            use: ["babel-loader"]
           },
           {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
          
        ]
    }
}