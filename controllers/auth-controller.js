const express = require('express');

const authController = express.Router();

const authService = require('../services/auth-service');

authController.post('/auth/login', async (req, res) => {
    const userName = req.body['userName'];
    const password = req.body['password'];

    const tokenResponse = await authService.authenticate({
        userName: userName,
        password: password
    });

    tokenResponse['errorMessage'] ? 
        res.status(400).send(tokenResponse['errorMessage']) : 
        res.send(tokenResponse);    
});

authController.post('/auth/register', (req, res) => {

});

authController.post('/auth/test', (req, res) => {
    res.status(200).send('auth success');
});

module.exports = {authController};