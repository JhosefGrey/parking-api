import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;

const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const nameClean = cleanFileName(fileName);
    if (nameClean !== 'index') {
        import(`./${nameClean}`).then((routerModule : any) => {
            router.use(`/api/${nameClean}`, routerModule.router)
        });
    }
})

export { router };