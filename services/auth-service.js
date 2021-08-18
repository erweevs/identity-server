const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

const users = [{id: 1, userName: 'Erwee', encryptedPassword: '123456'}]

async function authenticate({userName, password}){
    const registeredUserName = users.find(u => u.userName === userName);

    if(!registeredUserName){
        return {
            errorMessage: 'User Name does not exist yet'
        }
    }

    // TODO: convert incoming password to same as saved encrypted password
    
    const user = users.find(u => u.userName === userName && u.encryptedPassword === password);

    if(!user){
        return {
            errorMessage: 'Invalid User Name password combo'
        }
    }

    const token = jwt.sign({
        sub: user.id
    }, 
    config.jwt_secret,
    {
        expiresIn: '7d'
    });

    return token;
}

module.exports = {authenticate};

// class AuthService{
//     async authenticate({userName, password}){
//         const user = users.find(u => u.userName === userName && u.password === password);

//         const token = jwt.sign({
//             sub: user.id
//         }, 
//         config.jwt_secret,
//         {
//             expiresIn: '7d'
//         });

//         return token;
//     }
// }

// module.exports = AuthService;