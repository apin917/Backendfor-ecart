//import wishlistSchema
const wishlists=require('../model/wishlistSchema')

//logic for wishlist
//add products to wishlist 
exports.addtowishlist = async (req, res) => {
    //get specific product details from the request

    //js destructuring
    const { id, title, price, image } = req.body

    //logic for wishlist
    try {
        //check if the product is already in wishlist
        const item = await wishlists.findOne({ id })
        if (item) {
            res.status(401).json("item already in wishlist")
        }
        else{
            //product is added to wishlist
            const newProduct = await wishlists({id,title,price,image})
            //to store in db
            await newProduct.save()
            res.status(200).json("Item added to wishlist")//response send back to client
        }

    }
    catch(error) {
        res.status(404).json(error)

    }



}

//get wishlist products from db
exports.getwishlist=async(req,res)=>{
    try{

        //lolgic get all products from wishlist collection

        const allWishlist=await wishlists.find()
        res.status(200).json(allWishlist)//response send back to client

    }
    catch(error){
        res.status(404).json(error)
    }
}

//delete wishlist products from db
exports.deletewishlist=async(req,res)=>{
    const {id}=req.params
    try{
        //logic
        const removewishlist=await wishlists.deleteOne({id})
        if(removewishlist){
            //get all wishlist products after removing particular product
            const remainingwishlist=await wishlists.find()
            res.status(200).json(remainingwishlist)
        }

    }
    catch(error){
        res.status(404).json(error)//error response
    }
}