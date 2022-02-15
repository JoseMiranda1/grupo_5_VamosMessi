function userLoggedMiddleware (req,res,next) { 
    res.locals.isAnUserLogged = false; 
    if (req.session.userLogged !== undefined) { 
        res.locals.isAnUserLogged = true; //preguntamos si hay usuario loguiado 
        res.locals.userData ={ 
            name: req.session.userLogged.usuario,
            fechaNacimiento: req.session.userLogged.fechaNacimiento,
            
        };
    }

    // console.log (res.locals.isAnUserLogged);
    next();
}
module.exports =userLoggedMiddleware; 