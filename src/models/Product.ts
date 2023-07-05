import mongoose from '../db/conn';
import { Schema } from 'mongoose';

const Product = mongoose.model(
    'Product',
    new Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    }, { timestamps: true }),
);

export default Product;