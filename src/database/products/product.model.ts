import { model } from 'mongoose';
import { IProductDocument } from './product.types';
import ProductSchema from './product.schema';

export const ProductModel = model<IProductDocument>('product', ProductSchema);