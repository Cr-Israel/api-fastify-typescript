import { FastifyInstance } from 'fastify'
import { Create } from '../../controllers/products/Create';

export async function productRoutes(server: FastifyInstance) {
    server.post('/', Create);
    // server.get('/', Create);
};