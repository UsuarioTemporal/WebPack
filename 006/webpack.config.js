const HtmlWebPackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CleanWebPackPlugin = require('clean-webpack-plugin'),
    autoprefixer_ = require('autoprefixer'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    path = require('path')

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
            },
            {
                test:/\.(css|scss)$/,
                use:[
                    'style-loader', // nos permitira crear cadenas de texto css es decir el css que este en el .html <style>
                    MiniCssExtractPlugin.loader, // para poder extraer los estilos , es decir cuando se inyecta los estilos 
                                                //dentro js sacar las hojas de estilos 
                    // 'css-loader?minimize',//?minimize&sourceMap
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            autoprefixer:{
                                browser:['last 2 versions']
                            },
                            sourceMap:true,
                            plugins:()=>[autoprefixer_],
                            publicPath: '../',
                        }
                    },
                    'resolve-url-loader',//una ruta desde la funcion url de css
                    'sass-loader?outputStyle=compressed&sourceMap'
                ],
            },
            {
                test: /\.(jpe?p|png|gif|svg|ico|webp)$/i, //la i significa que ignora las mayusculas o minusculas
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]',
                            userRelativePath: true,
                            pathPublic:'./css'
                        }
                    },
                    'image-webpack-loader?bypassOnDebug'
                ]
            },
            {
                test:/\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)/i,
                use:'file-loader?name=[name].[ext]'
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
        new MiniCssExtractPlugin({
            filename: 'css/[name]-styles.css'
        }),
        new HtmlWebPackPlugin({
            template:'./src/template.html',
            file:'./index.html'
        })
    ]
}