import fastify from "fastify";
const server = fastify({ logger: true });

// Route
import { productRoutes } from "./routes/products/productRoutes";
server.register(productRoutes, { prefix: '/products' });

export default server;