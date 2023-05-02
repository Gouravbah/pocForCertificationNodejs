const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

// middleWare
const middleware = (req, res, next) => {
    console.log("hello middleware")
    next();
}

app.get('/about', middleware, (req, res) => {
    console.log("hello about page")
    res.send(`hello about`);
})

app.listen(3000, () => {
    console.log(`server is running in port no. 3000`);
});