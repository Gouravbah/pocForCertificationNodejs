const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send(`hello server router`);
});

// Registration POST API

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

// Login POST API

router.post('/login', async (req, res) => {

    try {
        const { name } = req.body
        if (!name) {
            return res.status(422).json({ error: 'Name is a Mandatory field' })
        }

        const checkExistingData = await User.findOne({ name: name });
        console.log("checkExistingData", checkExistingData)

        if (userData) {
            return res.status(201).json({ message: 'successfully login' })
        } else {
            return res.status(500).json({ error: 'error' })
        }

    } catch (error) {
        console.log(error);
    }
});

// Registration GET API

router.get('/about', async (req, res) => {
    const { name } = req.body
    try {
        const getDAta = await User.findOne({ name: name });

        if (getDAta) {
            return res.status(201).json({ message: 'successfully login', res: getDAta })
        } else {
            return res.status(500).json({ error: 'error' })
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;