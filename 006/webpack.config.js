const HtmlWebPackPlugin = require('html-webpack-plugin'),
    MiniCssExtracyPlugin = require('mini-css-extract-plugin'),
    CleanWebPackPlugin = require('clean-webpack-plugin'),
    autoprefixer_ = require('autoprefixer')

module.exports={
    entry: './src/index.js',
    devtool:'source-map',
    output:{
        path:`${__dirname}/../dist`,
        filename:'js/bundle.js'
    },
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
                use:[ // esto se pudo simplificar a  'html-loader?minimize=true' o 'html-loader?minimize'
                    {
                        loader:'html-loader',
                        options:{minimize:true}
                    }
                ]
            }
            ,
            {
                test:/\.(css|scss)$/,
                use:[
                    'style-loader', // nos permitira crear cadenas de texto css es decir el css que este en el .html <style>
                    MiniCssExtracyPlugin.loader, // para poder extraer los estilos , es decir cuando se inyecta los estilos dentro js
                                                // sacar las hojas de estilos 
                    // 'css-loader?minimize=true&sourceMap=true',//?minimize&sourceMap
                    {
                        loader:'css-loader',
                        options:{
                            minimize:true,
                            sourceMap=true
                        }
                    },
                    {
                        loader:'postcss-loader', //es una herramienta de pos compilacion que me permite transformar codigo css mediante js
                        options:{
                            autoprefixer:{
                                browser:['last 2 versions']
                            },
                            sourceMap:true,
                            plugins:()=>[autoprefixer_]
                        }
                    },
                    //'sass-loader?outputStyle=compressed&sourceMap'
                    // {
                    //     loader:'sass-loader',
                    //     options:{
                    //         // outputStyle='compressed',
                    //         sourceMap=true
                    //     }
                    // }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({  //primero que saque el codigo css
            filename: 'css/[name]-styles.css'
        }),
        new HtmlWebPackPlugin({
            template:'./src/template.html',
            file:'./index.html'
        })
    ]
}