const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));
app.use(require('./router/roles'));

app.listen(3000, () => {
    console.log(`server is running in port no. 3000`);
});

// {
//     Author: Gourav Bahare,
//     Use Of project: POC For Certification
// }