## Set-Up Dependencies

#### Node JS

Para ejecutar comandos de `npm` es necesario descargar [node js](nodejs.org).

#### Google Maps & Google Places API

En el directorio del repositorio ejecutar desde la consola

```console
$ npm install react-google-maps
$ npm install reactjs-captcha --save
$ npm install formik --save
$ npm install -S yup
$ npm install node-sass --save
```

Crear una cuenta en [Google Cloud Services](https://cloud.google.com/) y obtener una key para Google Maps.
Crear un archivo _.env.local_ con el siguiente codigo

```js
REACT_APP_GOOGLE_KEY = "API_KEY";
```

reemplazando **API_KEY** con la key obtenida.

## Probar

En el directorio del repositorio ejecutar desde la consola

```console
$ npm start
```

Se abre el puerto [http://localhost:3000](http://localhost:3000) y se ejecuta el codigo en el browser.
