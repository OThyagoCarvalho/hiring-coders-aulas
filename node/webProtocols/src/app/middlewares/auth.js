import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';

export default async (req, res, next) => {
    const authHeaders = req.headers.authorization;
    console.log(authHeaders);

    if (!authHeaders) {
        return res.status(401).json({
            message: 'Para acessar este serviço é necessário estar logado.'
        });
    }

    const [, token] = authHeaders.split(' ');
    const treatedToken = token.replace(/^"(.*)"$/, '$1');
    console.log(treatedToken);
    

    try {        
        const decoded = await promisify(jwt.verify)(treatedToken, authConfig.secret);
        req.userId = decoded.id
        next();
    } catch (err) {
        return res
            .status(401)
            .json({ message: 'Token de autenticação inválido' });
    }     
};
