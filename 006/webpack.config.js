const HtmlWebPackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CleanWebPackPlugin = require('clean-webpack-plugin'),
    autoprefixer_ = require('autoprefixer')

module.exports={
    entry: './src/index.js',
    devtool:'source-map',
    output:{
        path:`${__dirname}/dist`,
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
                    MiniCssExtractPlugin.loader, // para poder extraer los estilos , es decir cuando se inyecta los estilos dentro js
                                                // sacar las hojas de estilos 
                    // 'css-loader?minimize',//?minimize&sourceMap
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            autoprefixer:{
                                browser:['last 2 versions']
                            },
                            sourceMap:true,
                            plugins:()=>[autoprefixer_]
                        }
                    },
                    'resolve-url-loader',//una ruta desde la funcion url de css
                    'sass-loader?outputStyle=compressed&sourceMap'
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg|csv|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        userRelativePath: true
                    }
                }]
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                        progressive: true,
                        quality: 65
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: true,
                    },
                    pngquant: {
                        quality: '65-90',
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                        quality: 75
                    }
                }
            }
        ]
    },
    plugins:[
        
        new HtmlWebPackPlugin({
            template:'./src/template.html',
            file:'./index.html'
        }),
        new MiniCssExtractPlugin({  //primero que saque el codigo css
            filename: 'css/[name]-styles.css'
        })
    ]
}

// {
//     loader:'css-loader',
//     options:{
//         minimize:true
//     }
// },
// {
//     loader:'postcss-loader', //es una herramienta de pos compilacion que me permite transformar codigo css mediante js
//     options:{
//         autoprefixer:{
//             browser:['last 2 versions']
//         },
//         sourceMap:true,
//         plugins:()=>[autoprefixer_]
//     }
// },
// 'sass-loader'
// //'sass-loader?outputStyle=compressed&sourceMap'
// // {
// //     loader:'sass-loader',
// //     options:{
// //         // outputStyle='compressed',
// //         sourceMap=true
// //     }
// // }