const express =require("express");
const app = express();
const path = require("path");

app.listen(3000,()=> console.log ("Estamos usando el puerto 3000"));

const staticFiles = express.static(path.join(__dirname,"/public"));
app.use(staticFiles);

app.get("/", (req,res)=> {
    const pathHtml = path.resolve(__dirname,"views/home.html");
    res.sendFile(pathHtml);
});

app.get("/login", (req,res)=> {
    const pathHtml = path.resolve(__dirname,"views/login.html");
    res.sendFile(pathHtml);
});
app.get("/register",(req,res)=> res.sendFile(path.join(__dirname,"views/register.html")))

app.get("/product-detail", (req,res)=> {
    const pathProductDetail = path.resolve(__dirname, "views/productDetail.html");
    res.sendFile(pathProductDetail);
});