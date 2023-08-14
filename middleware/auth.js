const { UnauthenticatedError } = require('../errors');
const jwt = require('jsonwebtoken'); 
const dotenv = require('dotenv');
// Load config
dotenv.config({ path: './config/config.env' });



const authenticationMiddleware = async (req, res, next) =>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')){
        throw new UnauthenticatedError('No token provided')
        // throw new CustomAPIError('No token provided', 401)
    }

    const token = authHeader.split(' ')[1]
    // console.log(token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route') 
    }
}

module.exports = authenticationMiddleware