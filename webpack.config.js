const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

 

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        //filename: 'main.js'
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            
            },
        
            { // тут описываются правила
                test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
                exclude: /node_modules/ // исключает папку node_modules
                    },

                    {
                        test: /\.(eot|ttf|woff|woff2)$/,
                        loader: 'file-loader?name=./vendor/[name].[ext]'
                    },

                    {
                        test: /\.(png|jpg|gif|ico|svg)$/,
                        use: [
                                'file-loader?name=../images/[name].[ext]', // указали папку, куда складывать изображения
                                {
                                        loader: 'image-webpack-loader',
                                        options: {}
                                },
                        ]
                 }         
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // filename: 'style.css'
            filename: 'style.[contenthash].css',
         }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: false,
            filename: 'index.html'
        }),
       
        new WebpackMd5Hash(), 
    ]
};