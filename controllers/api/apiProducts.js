const {Product} = require('../../database/models');



module.exports = {

    show: async (req,res) => {
        const products = await Product.findAll({
        include: ['relProductCategory']});
       return res.json({
           total: products.length,//en la clave "total" contamos la cant de productos que hay
           products: products  //en la clave "products" mandamos el array de productos
        //status: "ok"
       }) 
    },
    
    /*store: async (req,res) => { //crear un producto
        await Product.create(req.body);
        return res.status(200).json(req.body) //a través del status vemos las cabeceras que se envían desde la api/// status(200) para cosas q salieron ok 
         
        
    },*/

    detail: async (req,res) => {
        const product = await Product.findByPk(req.params.id,{
        include: [ 'relProductCategory', ]
        });
       return res.status(200).json(product);
    },

    /*delete: async (req,res) => {
        const isDelete = await Product.destroy({
            where: {id: req.params.id }
           // include: ['relProductCart', 'relProductCategory', 
        //'relProductColor','relProductSize']})
         //VER PROQUE CREO Q TENGO Q INCLUIR LAS RELACIONES
        });

        if(isDelete){
            return res.status(200).json({ 
            message: 'Se eliminó el producto'
        });
       
        }
        
            return res.status(500).json({ 
            message: 'Problemas al eliminar el producto'
        });
     
    },*/
};


    
