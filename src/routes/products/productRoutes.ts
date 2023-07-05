import { FastifyInstance } from 'fastify'
import { Create } from '../../controllers/products/Create';
import { GetProducts } from '../../controllers/products/GetProducts';
import { GetProductById } from '../../controllers/products/GetProductById';
import { Update } from '../../controllers/products/Update';

export async function productRoutes(server: FastifyInstance) {
    // Create a Product
    server.post('/', Create);
    // Get All Products
    server.get('/', GetProducts);
    // Get a Single Product
    server.get('/:id', GetProductById);
    // Update a single Product
    server.patch('/update/:id', Update);
};