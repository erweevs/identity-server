const expressJwt = require('express-jwt');
const config = require('../config/config.json');

function authorizeEndpoints(){
    const { jwt_secret } = config;

    return expressJwt({ secret: jwt_secret, algorithms: ['HS256']}).unless({
        path:[
            '/api/auth/login',
            '/api/auth/register'
        ]
    });
}

module.exports = authorizeEndpoints;