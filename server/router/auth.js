const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send(`hello server router`);
})

router.post('/register', async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(422).json({ error: 'Name is a Mandatory field' })
    }

    try {
        const checkExistingData = await User.findOne({ name: name });
        if (checkExistingData) {
            return res.status(422).json({ error: 'Name alredy exist' })
        }
        const user = new User(req.body);

        const userData = await user.save()

        if (userData) {
            return res.status(201).json({ message: 'Successfull Data Created' })
        } else {
            return res.status(500).json({ error: 'error' })
        }

    } catch (err) {
        console.log(err);
    }
});

module.exports = router;