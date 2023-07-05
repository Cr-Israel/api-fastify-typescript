import { FastifyRequest, FastifyReply } from 'fastify';
import Product from '../../models/Product';
import mongoose from 'mongoose';

export async function Delete(req: FastifyRequest, reply: FastifyReply) {
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

    try {
        await Product.findByIdAndRemove(id);
        reply.code(200).send({ message: 'Produto removido com sucesso!' });
    } catch (error) {
        console.error('Deu erro na exclusão do produto: ' + error);
    };
};