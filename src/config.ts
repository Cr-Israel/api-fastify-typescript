import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(__dirname, '../.env');

dotenv.config({
    path: envPath,
});

export default {
    PORT: process.env.PORT,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS
};