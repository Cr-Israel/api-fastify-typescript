import { Schema } from 'mongoose';

const ProductSchema = new Schema({
    name: String,
    price: Number,
    description: String
});

export default ProductSchema;