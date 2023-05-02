const mongoose = require('mongoose');
const DB = process.env.DB

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`DB connected`);
}).catch((err) => { console.log(`not connected`); });

// {
//     Author: Gourav Bahare,
//     Use Of project: POC For Certification
// }