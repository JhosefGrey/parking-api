import { envs } from "./config/envs";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./presentacion/server";

(async () => {
    main();
})();

async function main() {

    await MongoDatabase.connect({ mongoUrl: envs.MONGO_URL, dbName: envs.MONGO_DB_NAME })

    const server = new Server({
        port: envs.PORT || 3000,
        secret: envs.SECRET || '7156938b-eeb6-4988-8e0a-afb41c7c665e'
    });
    server.start();
}