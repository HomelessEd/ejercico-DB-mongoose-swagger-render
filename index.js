require('dotenv').config(); 
const express = require("express");
const app = express();


const { MONGO_URL, dbConnection } = require("./config/config");

const mongoose = require("mongoose");
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index');
const routes = require('./routes/index'); 

const PORT = process.env.PORT || 3000;


dbConnection(); 

// 2. Middlewares
app.use(express.json()); 

// 3. Routes & Documentation
app.use('/', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));


app.listen(PORT, () => {
    console.log(`Server successfully started on port ${PORT}`);
    console.log(`Documentation available at: http://localhost:${PORT}/api-docs`);
});