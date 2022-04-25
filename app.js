const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
//session-->almacenamos del lado del servidor los datos del usuario importantes para permitirle navegar con fluidez por el sitio
//cuando el usuario cierra el navegador, la info se borra
const {check,validationResult} = require ('express-validator');
//aca estan los middlewares q cruzan toda la aplicacion
//setup del req.body --> asi nos puede llegar la info del form al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname + '../public')));
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
//Rutas de las apis
const apiRouter = require('./routes/api/api');
app.use('/api', apiRouter);
app.set('view engine', 'ejs');
const staticFiles = express.static(path.join(__dirname, './public'));
app.use(staticFiles);
//configuramos session como middleware
app.use(
    session({ //luego lo ejecutamos
        secret: 'keyboard cat', //le pasamos como argumento un O.L. con la propiedad "secret" con un txt unico aleatorio q sirve para identificar nuestro sitio web
        resave: false, //resave Obliga a que la sesión se guarde de nuevo,
        saveUninitialized: true,
    })
);
//middlewares de aplicacion por ruta: se aplican solo en las rutas donde los definimos
const userLoggedMD = require('./middlewares/userLoggedMiddleware');
app.use(userLoggedMD);
const mainRouter = require('./routes/main');
app.use('/', mainRouter);
const productsRoutes = require('./routes/products');
app.use('/products', productsRoutes);
const usersRouter = require('./routes/users');
const { is } = require('express/lib/request');
app.use('/users', usersRouter);
app.use((req, res, next) => {
    res.status(404).render('productNull');
});
app.listen(5500, () => console.log('Estamos usando el puerto 5500'));