const { Product,Brand } = require("../database/models"); //desestructuramos el objeto (require("../database/models")) tomando las partes q nos -->Product
const fs = require("fs");
const path = require("path");
const filePath = path.resolve(__dirname, "../data/products.json");
const productsArray = JSON.parse(fs.readFileSync(filePath, "utf8"));


    const controllers = {
       /* METODO LARGO para mandarle a la vista los productos:
       show: function (req, res) {   

            Product
            .findAll({                                //del modelo producto le pedimos todos
                include:["brand"]                    //para acceder a la relacion 
            })                            
            .then((products) => {                     //cuando los tenga, entonces q ejecute la funcion
               return res.render("home", {products});
            })
            .catch((err)=>{console.log(err) });                      
       
       
        },
        */

       /*METODO CORTO*/
        products: async (req,res)=>{
            try{ 
            const products= await Product.findAll({include:["brand"]})     
            return res.render("home", {products});  
        } catch (error){
            return res.send("error");
        }
         
        },

        formularioEdit: (req, res) => {
            try{
            res.send("Estas en formulario edit");
        } catch (error){
            console.log(error) //hay q mostrarle al usuario q hay un error con una vista-modificar el console.log
        }
        },

        productDetail: (req, res) => {
             res.render("productDetail")
        },
        read: (req, res) => {
           const productId = req.params.id
            res.send("Estamos en producto con id " + productId)
        },

         productEdit: (req, res) => {
           res.render("productEdit")
        },
        productCreate: async (req, res) => {
            try{
                const brands = await Brand.findAll({}); //tengo q traer el modelo tmb
                return res.render("create", {
                    brands
                });
            } catch (error){
                console.log(error);
            }
           //const productId = req.params.id
            //   res.render("productCreate", productId)
        },
        add: (req, res) => {
             const generateID = () => {
                const lastProduct = productsDB[productsDB.length - 1];
                const lastID = lastProduct.id;
                return lastID + 1;
        }

        productsArray.push({
            id: generateID(),
            nameProduct: req.params.name - product - create,
            tradeEdit: req.params.trade - create,
            compositionCreate: req.params.composition - create,
            propertyCreate: req.params.property - create,
            priceCreate: req.params.price - create,
            desctiptionCreate: req.params.description - create,
        })
        fs.writeFileSync(filePath, JSON.stringify(productsArray, null, " "))

        res.redirect("/products")
    },

    delete: (req, res) => {
        let idProducto = req.params.id;
        productsArray = productsArray.filter(product => product.id != idProducto);
        fs.writeFileSync(filePath, JSON.stringify(productsDetails, null, ' '));
        res.redirect("/");
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    
}


module.exports = controllers