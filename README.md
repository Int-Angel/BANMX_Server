# BANMX_Server

Esta es la API para la app de [BANMX](https://github.com/RicardoGLeal/BanMX)
Esta API actualmente solo se encarga del sistema de referidos, pero esta desarrollado de manera que es facil de escalar.

## Instalación

### .env

Agrega un archivo .env con tus claves de Firebase:

Express config
PORT=PORT
HOST=HOST
HOST_URL=url

Firebase config
API_KEY=KEY
AUTH_DOMAIN=domain
PROJECT_ID=id
STORAGE_BUCKET=bucket
MESSAGING_SENDER_ID=sender
APP_ID=id
MEASUREMENT_ID=id

### Correr servidor

Clona este repositorio:
$ npm install
$ npm start

## Estructura del proyecto

### Index

Contiene las rutas generales de la API y utiliza routes para separar los endpoints.

### db

Contiene los modulos de firebase para usarlos facilmente en el proyecto

### config

Contiene la configuracion de firebase y del servidor utilizando el archivo .env

Utilizamos routes, models y controllers para hacer nuestra API escalable.

### Routes

Son las rutas a los endpoints que llaman a metodos de los controladores

### Controllers

Son metodos que ejecutan algo de codigo

### Modelos

Modelos de la base de datos utilizados por los controllers

En nuestro proyecto tenemos una ruta para referals que llama a un controlador con un endpoint que es el de referrals que utiliza un modelo para referrals.

Esto nos permite escalar la API de manera rapida.

## Endpoints

/descargar/referral/?id=
Este endpoint actualiza el contador de referidos del usuario al que le pertenece el link y redirige al nuevo usario a la play store para descargar la app.
Parametros:

- id: es el id del usuario al que le pertenece el link

nota: deberia de redirigir a una pagina para descargar la app, pero actualemente la app no se encuentra en ningun lugar disponible.
