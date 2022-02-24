const fs = require("fs")
const path = require("path")
const filePath = path.resolve(__dirname, "../data/products.json")
const productsArray = JSON.parse(fs.readFileSync(filePath, "utf8"))

const generateID = () => {
    if (productsArray.length != 0) {
        const lastProduct = productsArray[Number(productsArray.length) - Number(1)];
        const lastID = Number(lastProduct.id) + Number(1);
        return lastID;
    } else {
        const lastID = 1
        return lastID;
    }
};


const controllers = {
    products: (req, res) => {
        res.render("products", {
            productsList: productsArray
        })
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
    productCreate: (req, res) => {
        const productId = req.params.id
        res.render("productCreate", productId)
    },
    add: (req, res) => {
   

        const bodyData = req.body;
        productsArray.push({
            id: generateID(),
            ...bodyData,
            
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