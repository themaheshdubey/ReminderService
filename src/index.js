const express = require('express');
const app = express();

const {PORT} = require('./config/serverConfig');

const createAServer = () => {

    app.listen(PORT , () => {
        console.log(`Server running at port ${PORT}`);
    });
}

createAServer();