const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbail: String,
    images:[String],

})

const product=mongoose.model('products', productSchema)
module.exports=product







