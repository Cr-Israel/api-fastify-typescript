import { FastifyReply, FastifyRequest } from 'fastify';

export async function Create(req: FastifyRequest, reply: FastifyReply) {
    const { name, price, description } = req.body;
    
};