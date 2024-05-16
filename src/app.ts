import { envs } from "./config/envs";
import { Server } from "./presentacion/server";

(async () => {
    main();
})();

function main() {
    const server = new Server({
        port: envs.PORT || 3000,
        secret: envs.SECRET || '7156938b-eeb6-4988-8e0a-afb41c7c665e'
    });
    server.start();
}