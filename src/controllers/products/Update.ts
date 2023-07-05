import { FastifyRequest, FastifyReply } from "fastify";
import Product from '../../models/Product';
import { ObjectId } from "mongoose";

export async function Update(req: FastifyRequest, reply: FastifyReply) {
    const { id } = req.params as {
        id: ObjectId
    };
    const { name, price, description } = req.body as {
        name: string;
        price: number;
        description: string;
    };

    const newProduct = {
        name,
        price,
        description
    };

    try {
        await Product.findByIdAndUpdate(id, newProduct)
        reply.code(200).send({ message: 'Produto atualizado com sucesso!', newProduct });
    } catch (error) {
        console.error('Deu erro na atualização do produto: ' + error);
    };
};