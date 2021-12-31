const express =require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname + '../public')));

app.listen(3000,()=> console.log ("Estamos usando el puerto 3000"));

app.set("view engine", "ejs")

const staticFiles = express.static(path.join(__dirname,"./public"));
app.use(staticFiles);


const mainRouter= require("./routes/main");
app.use("/", mainRouter)