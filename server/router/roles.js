const express = require('express')
const router = express.Router()
require('../db/conn');

const Roles = require('../models/rolesSchema');

router.post('/roles', async (req, res) => {
    const role = new Roles(req.body);

    const userData = await role.save()

    if (userData) {
        return res.status(201).json({ message: 'Successfull Data Created' })
    } else {
        return res.status(500).json({ error: 'error' })
    }

});

module.exports = router