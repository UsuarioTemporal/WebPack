const HtmlWebPackPlugin = require('html-webpack-plugin'),
    MiniCssExtracyPlugin = require('mini-css-extract-plugin'),
    CleanWebPackPlugin = require('clean-webpack-plugin'),
    autoprefixer = require('autoprefixer')

module.exports={
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.(js)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.(html)$/,
                use:[
                    {
                        loader:'html-loader',
                        options:{minimize:true}
                    }
                ]
            },
            {
                test:/\.(css|scss)$/,
                use:[
                    'style-loader',
                    MiniCssExtracyPlugin.loader,
                    'css-loader?minimize=true&sourceMap',
                    {
                        loader:'postcss-loader',
                        options:{
                            autoprefixer:{
                                browser:['last 2 versions']
                            },
                            sourceMap:true,
                            plugins:()=>[autoprefixer]
                        }
                    },
                    'sass-loader?outputStyle=compress&sourceMap'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebPackPlugin({
            template:'./src/template.html',
            file:'./index.html'
        })
    ]
}