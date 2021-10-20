import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    name:{type:String,required:true},
    rating:{type:Number,required:true},
    comment:{type:String,required:true}
},{
    timeStamps:true
})

// the user to identify which user created which product
const productSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:Boolean,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        default:0
    },
    numberReviews:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    countInStocks:{
        type:Number,
        required:true,
        default:0
    }
},{
    timeStamps:true
})

const Product = mongoose.model('Product',productSchema)
export default Product