//logic To resolve


//get all products


//import product collecton
const products = require('../model/productsSchema')



//get all products
exports.getallproducts = async (req, res) => {
    //logic
    try {
        //get all products from products collection in mongodb
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    }
    catch (err) {
        res.status(401).json(err)//error sending back to the client

    }
}

//view particular logic details
exports.viewproduct = async (req, res) => {
    //logic
    //get particular product id
    const id = req.params.id //2
    //get details of particular product
    try {
        const product = await products.findOne({ id })
        if (product) {
            res.status(200).json(product)//product send back to the client

        }
        else {
            res.status(401).json("product not found")//error sending back to 
        }
    }
    catch (err) {
        res.status(401).json(err)//error sending back to the
    }
}


