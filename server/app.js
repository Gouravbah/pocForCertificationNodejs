const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

const DB = process.env.DB

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}).then(() => {
    console.log(`DB connected`);
}).catch((err) => { console.log(`not connected`); });

// middleWare
const middleware = (req, res, next) => {
    console.log("hello middleware")
    next();
}

app.get('/', (req, res) => {
    res.send(`hello server`);
})

app.get('/about', middleware, (req, res) => {
    console.log("hello about page")
    res.send(`hello about`);
})

app.listen(3000, () => {
    console.log(`server is running in port no. 3000`);
});