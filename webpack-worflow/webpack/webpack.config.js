const HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports ={
    entry:'./src/app.js',
    output:{
        path:`${__dirname}/../dist`, // se puede usar path.join
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.(css|scss)$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.handlebars',
            minify:{
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ]
}

/**
 * 
 * npx : En el repositorio se nos explica que npx es un ejecutador de paquetes binarios de npm
 */


// npx webpack --config webpack/webpack.config.js -d || -p

