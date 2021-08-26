const jwt = require('jsonwebtoken');
const config = require('../config/config.json');

// TODO: replace with DB call
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
        sub: user.id,
        'test_claim': 'test'
    }, 
    config.jwt_secret,
    {
        expiresIn: '2min'
    });

    return token;
}

async function register({userName, password}){
    // TODO: check email fromat

    // TODO: check password strength

    // TODO: encrypt the password
    const encryptedPassword = password;

    // insert the user
    users.push({
        // TODO: generate unique key
        id: 2,
        userName: userName,
        encryptedPassword: encryptedPassword
    });
}

module.exports = {authenticate, register};