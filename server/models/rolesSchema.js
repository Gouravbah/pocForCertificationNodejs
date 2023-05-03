const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    roles: {
        type: String,
        required: true
    } 
});

const Roles = mongoose.model('ROLES', roleSchema);

module.exports = Roles;

// {
//     Author: Gourav Bahare,
//     Use Of project: POC For Certification
// }