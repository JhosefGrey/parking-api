import { envs } from "./config/envs";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./presentacion/server";

(async () => {
    main();
})();

async function main() {

    await MongoDatabase.connect({ mongoUrl: envs.MONGO_URL, dbName: envs.MONGO_DB_NAME })

    const server = new Server({ port : envs.PORT || 3000});
    server.start();
}