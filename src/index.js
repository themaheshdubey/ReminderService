const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');

const controller = require('./controllers/ticketController');

const service = require('./utils/job');

const createAServer = () => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.post('/api/v1/tickets', controller.create);

    service.setUpJobs();

    app.listen(PORT , () => {
        console.log(`Server running at port ${PORT}`);

    });

}

createAServer();