const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    entry:'./src/app.js',
    output:{
        path:`${__dirname}/../dist`, // se puede usar path.join
        filename:'bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.handlebars'
        })
    ]
}

/**
 * Diferencia entre NPM y NPX
 */


// npx webpack --config webpack/webpack.config.js

