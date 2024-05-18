import { hash, compare } from 'bcryptjs'

const encrypt = async (pwd: string) => {
    const passwordHash = await hash(pwd, 9)
    return passwordHash;
}

const verified = async (pwd: string, pwdHash: string) => {
    const isCorrect = await compare(pwd, pwdHash);
    return isCorrect;
}

export { encrypt, verified }