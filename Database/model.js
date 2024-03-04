import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        require: [true, 'Please enter product name'],
    },
    quantity: {
        type: Number,
        require: true,
        default: 0,
    },
    price: {
        type: Number,
        require: true,
        default: 0,
    },
    image: {
        type: String,
        require: false,
    }

}, { timestamps: true })
const product = mongoose.model("products", productSchema);
export default product;