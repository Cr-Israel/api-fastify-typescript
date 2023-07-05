import { FastifyReply, FastifyRequest } from 'fastify';
import Product from '../../models/Product';
import { ObjectId } from 'mongoose';

export async function GetProductById(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as {
        id: ObjectId
    };

    const product = await Product.findById(id);
    reply.code(200).send(product);
};