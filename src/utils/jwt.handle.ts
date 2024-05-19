import { sign, verify } from 'jsonwebtoken';
import { IUsuario } from '../interfaces/usuario.interface';
const JWT_SECRET = process.env.SECRET || "";

const generateToken = (payload: IUsuario) => {
    const jwt = sign(payload, JWT_SECRET, { expiresIn: '2h' });
    return jwt;
}

const verifyToken = (token: any ) => {

}

export { generateToken, verifyToken };