const path = require ("path");
const db = require("../database/models");


const Products = db.Products;

const mainController = {
    home: async (req,res) =>{
      const products = await Products.findAll({
          
          include: [
            {
              association: "category",
            },
          ],
        
        })
        

        res.render("home", {
          products
          
        })
    }
}
module.exports= mainController