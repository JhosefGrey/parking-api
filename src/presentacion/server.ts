import express from 'express';

interface Options {
    port: number,
    secret: string
}

export class Server {

    private readonly port: number
    private readonly secret: string

    constructor(options: Options) {
        const { port, secret } = options;
        this.port = port;
        this.secret = secret;
    }

    private app = express();

    async start() {
        this.app.listen(this.port, () => {
            console.log(`server runing at port: ${this.port}`);
        })
    }
}