require('dotenv').config();
const express = require('express');
const massive = require('massive');
const { CONNECTION_STRING } = process.env
const { getInventory, createProduct } = require('./controller');

const app = express();

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log("*clicks enter on keyboard* I'm in");
    })
    .catch(err => {
        console.log(err);
    })

app.use(express.json);
app.get('/api/inventory', getInventory);
app.post('/api/product', createProduct);

app.listen(8760, () => console.log('Running on port 8760'));