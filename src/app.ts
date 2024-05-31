import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes';
import db from './config/mongo';
import { Socket } from 'socket.io';
const http = require('http');
const socketIo = require('socket.io');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*', // Allow all origins
        methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all methods
      }
});

io.on('connection', (socket : Socket) => {
  console.log('a user connected');
  
  socket.on('message', (msg) => {
      io.emit('message', msg);
  });

  socket.on('disconnect', () => {
      console.log('user disconnected');
  });
});

db().then(() => console.log("Conexión en mongo"));

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });

app.listen(PORT, () => console.log(`Servidor en el puerto ${PORT}`))
server.listen(3500, () => {
  console.log('listening on *:3500');
});
