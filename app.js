const express = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`hello server`);
})

app.listen(3000, () =>{
    console.log(`server is running in port no. 3000`);
});