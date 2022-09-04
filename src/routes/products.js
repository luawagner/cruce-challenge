const express = require ('express');
const { Router } = require('express');
const productsController = require ('../controllers/productsController');
const router = express.Router();

router.get('/products/search', productsController.search);
router.get('/products/:category?', productsController.list);


module.exports= router