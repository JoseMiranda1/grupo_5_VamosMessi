const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const {check,validationResult} = require ('express-validator');
//const fetch = require('node-fetch');
//const axios = require('axios');



//setup del req.body --> asi nos puede llegar la info del form al req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname + '../public')));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


//practicando fetch
/*app.get('/', async (req,res)=>{
    //const apiKey = '9dbb50dcf5618797d3b71923873677f5';
    //const city= req.query.name;
    //const endPoint = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;//le pasamos la ruta q queremos consultar
    
    try {
      // const apiEndPoint = await fetch(endPoint).then(function(response){return response.json()}); //JSON.parse(response)
        


       axios
       .get('http://api.weatherstack.com/current?access_key=9dbb50dcf5618797d3b71923873677f5&query=New%20York')
       .then(data =>{
           console.log("aca axiossssss" , data);
       })
        //return res.json({  //mandamos la api al navegador
       // developer:"tn30",
        //apiResponse: apiEndPoint.location.name
   // });
   
}
catch(error){
    return res.json({
        error:error
    })
}
    
})*/

//Rutas de las apis
const apiRouter = require('./routes/api/api');
app.use('/api', apiRouter);

app.set('view engine', 'ejs');


const staticFiles = express.static(path.join(__dirname, './public'));

app.use(staticFiles);



//session
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
    })
);



//inicio del Middlewares
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
    res.status(404).render('notFound');
});


app.listen(3000, () => console.log('Estamos usando el puerto 3000'));
