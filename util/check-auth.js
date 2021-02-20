const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

module.exports = (context) => {
    //context = { ...headers }
    const authHeader = context.req.headers.authorization;
    if(authHeader){
        //Bearer...
        const token = authHeader.split('Bearer ')[1];
        if(token){
            try{
                const user = jwt.verify(token, SECRET_KEY);
                return user;
            } catch(err){
                throw new AuthenticationError('Invalido/Expirado Token');
            }
        }
        throw new Error("El token de autenticación debe ser 'Bearer [token]");
    }
    throw new Error('Se debe proporcionar el encabezado de autorizacion');
}