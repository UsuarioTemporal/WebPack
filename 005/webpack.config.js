module.exports = {
    // los loaders se guardaran en modules
    module:{
        // aquí son las reglas que webpack debe de seguir para transformar y leer archivos de tal tipo
        rules:[
            //cada regla va a definirse en un objeto , un objeto para babel otro para css otro para interpretar js
            {
                test:/\.(js)$/,
                exclude:/node_modules/,
                use : {
                    loader:'babel-loader'
                }
            }
        ]
    }
}