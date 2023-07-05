import { FastifyRequest, FastifyReply } from "fastify";
import Product from '../../models/Product';
import mongoose from 'mongoose';

export async function Update(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as {
        id: mongoose.ObjectId
    };
    const { name, price, description } = req.body as {
        name: string;
        price: number;
        description: string;
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
        const newProduct = {
            name,
            price,
            description
        };
        await Product.findByIdAndUpdate(id, newProduct)
        reply.code(200).send({ message: 'Produto atualizado com sucesso!', newProduct });
    } catch (error) {
        console.error('Deu erro na atualização do produto: ' + error);
    };
};