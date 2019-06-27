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

## **Conocimientos previos antes de coderar y hacer la futura configuración**

- Nos ayudará para la transformación de nuestros modulos , cabe recalcar que este bundler solo se usara en el area de desarrollo mas nos en producción

## **Configuración**

- *Entrypoints :* Multiples puntos de entrada a las aplicaciones
- *Output :* Ya definido el archivo que estara observando debemos indicarles donde se alojara el archivo y como se llamará , para que el navegador sepa de donde leer todo el bundle
- *Loaders :* Nos ayudarán a cargar todo tipo de formato de archivos
- *Plugins :* Extenderemos las habilidades de webpack(minificacion)

***References sobre Bundle***

- [Bundle-1](https://www.arquitecturajava.com/que-es-un-javascript-bundle/)

***Referencias sobre WebPack***

- [Webpack vs grunt vs grunt](https://da-14.com/blog/gulp-vs-grunt-vs-webpack-comparison-build-tools-task-runners)

```javascript
    /* Este repositorio está inspirado en la documentación de christian .
    https://github.com/pystudent1913/How-to-Webpack*/
```

```python
    # Autor : Thom Maurick Roman Aguilar
    # Estudiante de la carrera Ingeniería de Sistemas
```
