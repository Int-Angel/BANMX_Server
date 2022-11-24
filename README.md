# BANMX_Server

Esta es la API para la app de [BANMX](https://github.com/RicardoGLeal/BanMX)<br />
Esta API actualmente solo se encarga del sistema de referidos, pero esta desarrollado de manera que es facil de escalar.<br />

## Instalación

### .env

Agrega un archivo .env con tus claves de Firebase:<br />

**Express config**<br />
PORT=PORT<br />
HOST=HOST<br />
HOST_URL=url<br />

<br />

**Firebase config**<br />
API_KEY=KEY<br />
AUTH_DOMAIN=domain<br />
PROJECT_ID=id<br />
STORAGE_BUCKET=bucket<br />
MESSAGING_SENDER_ID=sender<br />
APP_ID=id<br />
MEASUREMENT_ID=id<br />
<br />

### Correr servidor

Clona este repositorio:<br />
$ npm install<br />
$ npm start<br />

## Estructura del proyecto

### Index

Contiene las rutas generales de la API y utiliza routes para separar los endpoints.

### db

Contiene los modulos de firebase para usarlos facilmente en el proyecto.

### config

Contiene la configuracion de firebase y del servidor utilizando el archivo .env<br />

Utilizamos routes, models y controllers para hacer nuestra API escalable.

### Routes

Son las rutas a los endpoints que llaman a metodos de los controladores

### Controllers

Son metodos que ejecutan algo de codigo

### Modelos

Modelos de la base de datos utilizados por los controllers<br />

En nuestro proyecto tenemos una ruta para referals que llama a un controlador con un endpoint que es el de referrals que utiliza un modelo para referrals.<br />

Esto nos permite escalar la API de manera rapida.

## Endpoints

**/descargar/referral/?id=**<br />
Este endpoint actualiza el contador de referidos del usuario al que le pertenece el link y redirige al nuevo usario a la play store para descargar la app.<br />
Parametros:<br />

- id: es el id del usuario al que le pertenece el link

nota: deberia de redirigir a una pagina para descargar la app, pero actualemente la app no se encuentra en ningun lugar disponible.
---

### MIT License

Copyright (c) 2022 BANMX

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
