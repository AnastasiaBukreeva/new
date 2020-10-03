const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
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
            filename: 'style.css'
        })
    ]
};