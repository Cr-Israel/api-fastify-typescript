import { FastifyReply, FastifyRequest } from 'fastify';
import Product from '../../models/Product';
import mongoose from 'mongoose';

export async function GetProductById(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as {
        id: mongoose.ObjectId
    };

    // Check if ID is valid
    if (!mongoose.isValidObjectId(id)) {
        reply.code(422).send({ message: 'Produto com identificador inválido!' });
        return;
    };

    // Check if Product Exist
    const product = await Product.findOne({ _id: id });
    if (!product) {
        reply.code(422).send({ message: 'Produto não existente!' });
        return;
    };

    reply.code(200).send({ product });
};