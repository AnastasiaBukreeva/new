const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

 

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
                use: [(isDev ? 'style-loader' : MiniCssExtractPlugin.loader), 
                {
                    loader:'css-loader',
                    options: {
                        importLoaders: 2
                    }                    

                },
               'postcss-loader'
            ]

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
                                'file-loader?name=./dist/images/[name].[ext]&esModule=false', // указали папку, куда складывать изображения
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
         new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
    }),
        //new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: false,
            filename: 'index.html'
        }),
       
        new WebpackMd5Hash(), 
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }) 
    ]
};