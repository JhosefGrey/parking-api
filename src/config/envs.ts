import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    SECRET: get('SECRET').required().asString(),
    MONGO_URL: get('MONGO_URL').required().asString(),
    MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
    MONGO_USER: get('MONGO_USER').required().asString(),
    MONGO_PWD: get('MONGO_PWD').required().asString()
}