const express = require('express');
const router = express.Router();
const apiProductsController = require ("../../controllers/api/apiProducts");
const apiUsersController = require ("../../controllers/api/apiUsers");

//productos:
//localhost:3000/api/products
router.get("/products", apiProductsController.show);

//viene por POST 
//router.post("/products", apiProductsController.store);

//metodo para que me muestre el detalle de un producto
//localhost:3000/api/products/:id
router.get("/products/:id", apiProductsController.detail);


//router.delete("/products/:id", apiProductsController.delete);

//usuarios:
//http://localhost:3000/api/users
router.get("/users",apiUsersController.show);
//http://localhost:3000/api/users/:id
router.get("/users/:id", apiUsersController.detail);




module.exports = router; 