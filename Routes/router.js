//to define routes for the client request

//import express
const express=require('express');

//import productController
const productController= require('../Controllers/productController')

//import wishlistcontroler
const wishlistController = require('../Controllers/wishlistController')

//import cart controller
const cartController= require('../Controllers/cartController')

//using express create an object for router class inorder to setup path
const router = new express.Router();

//resolve various client request

//api call

//1 get all products
router.get('/products/allProducts',productController.getallproducts)

//2. view particular product details
router.get('/products/viewProduct/:id',productController.viewproduct)

//3.wishlists details
router.post('/products/addtowishlist', wishlistController.addtowishlist)

//4. get wishlist details
router.get('/products/wishlist',wishlistController.getwishlist)

//5. delete wishlist product
router.delete('/products/deletewishlist/:id',wishlistController.deletewishlist)

//6.addtocart
router.post('/products/addtocart',cartController.addtocart)

//7. get cart products
router.get('/products/getcart',cartController.getcart)

//8.delete cart products
router.delete ('/products/deletecart/:id',cartController.delete)

//9.increment cartcount
router.get('/products/increment/:id',cartController.incrementCartItems)

//10.
router.get('/products/decrement/:id',cartController.decrementCartItems)

//export router 
module.exports = router