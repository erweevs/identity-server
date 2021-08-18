const express = require('express');

const app = express();
app.use(express.json());

const {authController} = require('./controllers/auth-controller');
const authorizeEndpoints = require('./helpers/auth-helper');
const errorHandler = require('./helpers/error-handler-helper');

app.use(authorizeEndpoints());
app.use(errorHandler);

app.use('/api', authController);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});