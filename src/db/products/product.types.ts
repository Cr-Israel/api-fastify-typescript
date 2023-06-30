import { Document, Model } from 'mongoose';

export interface IProduct{
    name: string,
    price: number,
    description: string
};

export interface IProductDocument extends IProduct, Document {};
export interface IProductModel extends Model<IProductDocument> {};