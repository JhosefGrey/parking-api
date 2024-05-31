import { sign, verify } from 'jsonwebtoken';
import { IUsuario } from '../interfaces/usuario.interface';
const JWT_SECRET = process.env.SECRET || "";

const generateToken = (payload: { user: string }) => {
    const jwt = sign(payload, JWT_SECRET, { expiresIn: '2h' });
    return jwt;
}

const verifyToken = (token: string)   => {
    const isOk = verify(token, JWT_SECRET);
    console.log(isOk);
    return isOk;
}

export { generateToken, verifyToken };