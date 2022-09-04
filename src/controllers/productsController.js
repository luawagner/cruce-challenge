const path = require ("path");
const db = require("../database/models");
const { Op } = require("sequelize");


const Products = db.Products;
const Categories = db.Categories;

const productsController = {
    
      list: async(req,res)=>{
        const cat = req.params.category
        if (cat){
          const [products, categories] = await Promise.all ([
 
          Products.findAll({
            where:{
              category_id: cat
            },
            include: [
              {
                association: "category",
              },
            ],
            order:[
              ['final', 'DESC']      
       ]
          }),
          Categories.findAll({
            include: [
              {
                association: "products",
              },
            ],
          }),
        ])
          res.render("products/products", {
            products:products,
            cat,
            categories:categories,
            
        })
        
        } else{
          const cat = []
          const [products, categories] = await Promise.all ([
          Products.findAll({
            include: [
              {
                association: "category",
              },
            ],
            order:[
                ['final', 'DESC']      
         ]
          }),
          Categories.findAll({
            include: [
              {
                association: "products",
              },
            ],
          }),
        ])
        res.render("products/products", {
          cat,
          products:products,
          categories:categories,
          
      })
        }
      },
     search: async (req, res) =>{
      const cat = []
      const [products, categories] = await Promise.all ([
        await Products.findAll({
          where:{
            title: {
              [Op.like]:"%" + req.query.search + "%",
            }            
          },
          include: [
              {
                association: "category",
              },
            ],
            order:[
              ['final', 'DESC']      
       ]
        }),
        Categories.findAll({
          include: [
            {
              association: "products",
            },
          ],
        })
      ])
          res.render('products/products',{
            products:products,
            cat,
            categories:categories,
            
        })
       
      }
}
module.exports= productsController