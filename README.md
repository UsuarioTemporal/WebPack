# **¿Qué es Webpack?**

![WebPack](https://github.com/pystudent1913/How-to-Webpack/raw/master/imgs/que-es-webpack.jpg)

Mas de ser un empaquetar de **Bundler** es un automatizador de tareas en general para el desarrollo web.

## **¿Pero que carajos es un bundler?**

![bundle](https://www.arquitecturajava.com/wp-content/uploads/JavaScriptBundleBrowserifyDiagram.png)

```javascript
    /* Un bundle sirve para agrupar todos los ficheros de JavaScript
    en uno solo. Así el navegador no necesita hacer varias
    peticiones HTTP.*/
```

## **Instalación**

Para la intalacion de webpack se necesitara de `Node.js` para poder trabajar con npm y poder agregar todas la dependencias

```sh
    > npm i --save-dev webpack webpack-cli
```

## **Configuración**

- **Entrypoints :** Multiples puntos de entrada a las aplicaciones
- **Output :** Ya definido el archivo que estara observando debemos indicarles donde se alojara el archivo y como se llamará , para que el navegador sepa de donde leer todo el bundle
- **Loaders :** Nos ayudarán a cargar todo tipo de formato de archivos
- **Plugins :** Extenderemos las habilidades de webpack(minificacion)

### **Algunos plugins muy dificiles de entender**

#### **clean-webpack-plugin**

````sh
    # instalación
    $ npm install -D clean-webpack-plugin
````

Este plugin se usará cuando corra una ejecución en producción y se pueda limpiar la carpeta de publicación. Entonces cada vez que
nosotros hagamos un build nuevo y no halla confusión de archivos de la producción anterior, este plugin lo que hará es borrar
todo lo que este en la carpeta de distribución `dist/`

#### **file-loader**

````sh
    # instalación
    $ npm install -D file-loader
````

Si yo necesito usar archivos tipograficos o una imagen , este plugin sabra donde encontrar el path de ese archivo

#### **image-webpack-loader**

````sh
    #instalación
    $ npm install -D image-webpack-loader
````

cargador que me permitira optimizar las imagenes para la carpeta de distribucion

## **¿Qué es Source Map?**

Cuando se comienza a configurar ls cargadores en las reglas de
webpack, la propiedad loaders genera transformaciones al código 
programado por lo cual es uno de los motivos del error al hacer
debugging. Este es el momento en el que usamos la propiedad 
SourceMap que realizara un mapeo entre el original y la copia.

## ***Fuentes :***

***References sobre Bundle***

- [*Bundle-1*](https://www.arquitecturajava.com/que-es-un-javascript-bundle/)

***Referencias sobre WebPack***

- [*Webpack vs gulp vs grunt*](https://da-14.com/blog/gulp-vs-grunt-vs-webpack-comparison-build-tools-task-runners)
- [*Documentación oficial*](https://webpack.js.org/concepts/)
- [*Source Map*](https://openwebinars.net/blog/webpack-que-es-source-maps/)

```javascript
    /* Este repositorio está inspirado en la documentación de christian .
    https://github.com/pystudent1913/How-to-Webpack*/
```

```python
    # Autor : Thom Maurick Roman Aguilar
    # Estudiante de la carrera Ingeniería de Sistemas
```
