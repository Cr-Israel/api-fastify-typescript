import { FastifyReply, FastifyRequest } from 'fastify';
import Product from '../../models/Product';

export async function Create(req: FastifyRequest, reply: FastifyReply) {
    const { name, price, description } = req.body as {
        name: string;
        price: number;
        description: string;
    };

    if (!name) {
        reply.code(400).send({ message: 'O nome é obrigatório, tente novamente!' });
        return;
    };
    if (!price) {
        reply.code(400).send({ message: 'O preço é obrigatório, tente novamente!' });
        return;
    };
    if (!description) {
        reply.code(400).send({ message: 'A descrição é obrigatória, tente novamente!' });
        return;
    };

    const product = new Product({
        name,
        price,
        description
    });

    try {
        await product.save();
        reply.code(201).send({ message: 'Produto criado com sucesso!' })
    } catch (error) {
        console.error('Erro na criação do produto: ' + error);
    };

};