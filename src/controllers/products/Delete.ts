import { FastifyRequest, FastifyReply } from 'fastify';
import Product from '../../models/Product';
import { ObjectId } from 'mongoose';

export async function Delete(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as {
        id: ObjectId
    };

    try {
        await Product.findByIdAndRemove(id);
        reply.code(200).send({ message: 'Produto removido com sucesso!' });
    } catch (error) {
        console.error('Deu erro na exclusão do produto: ' + error);
    };
};