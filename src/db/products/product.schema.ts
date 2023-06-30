import { Schema } from 'mongoose';
import { IProduct } from './product.types';

const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true }
});

export default ProductSchema;