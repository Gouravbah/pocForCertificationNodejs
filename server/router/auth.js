const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send(`hello server router`);
})

router.post('/register', (req, res) => {

    const { name } = req.body;
    if (!name) {
        return res.status(422).json({ error: 'name is a required field' })
    }

    User.findOne({ name: name }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({ error: 'name alredy exist' })
        }
        const user = new User(req.body);

        user.save().then(() => {
            return res.status(201).json({ message: 'Successfull' })
        }).catch((err) => {
            return res.status(500).json({ error: 'error' })
        })

    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;