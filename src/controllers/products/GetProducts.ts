import { FastifyReply, FastifyRequest } from 'fastify';
import Product from '../../models/Product';

export async function GetProducts(req: FastifyRequest, reply: FastifyReply) {
    const products = await Product.find();
    reply.code(200).send(products);
};