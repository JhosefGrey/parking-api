import express from 'express';

interface Options {
    port: number
}

export class Server {

    private readonly port: number;

    constructor(options: Options) {
        const { port } = options;
        this.port = port;
    }

    private app = express();

    async start() {
        this.app.listen(this.port, () => {
            console.log(`server runing at port: ${this.port}`);
        })
    }
}