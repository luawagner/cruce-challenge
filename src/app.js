const express = require ('express')
const app = express();
const path = require("path");
const rutaHome = require("./routes/home");
const rutaProducts = require("./routes/products");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(rutaHome);
app.use(rutaProducts);

const PORT= 3000;
app.listen(PORT, ()=>{
    console.log('http://localhost:3000')
})