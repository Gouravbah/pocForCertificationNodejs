const express = require('express');
const app = express();

// middleWare

const middleware = (req, res, next) => {
    next();
}


app.get('/', (req, res) => {
    res.send(`hello server`);
})

app.get('/about', middleware, (req, res) => {
    res.send(`hello about`);
})

app.listen(3000, () => {
    console.log(`server is running in port no. 3000`);
});