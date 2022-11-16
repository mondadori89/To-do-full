const express = require('express');
const pool = require('../models/database');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const registerRouter = express.Router();

registerRouter.post('/', async (req, res) => {
	const { name, email, password, password2 } = req.body;
    console.log(name, email, password, password2);

	if (!name || !email || !password || !password2) {
        console.log('Please enter all fields');
		res.status(401).json({ message: 'Please enter all fields' });
	}
	// check if password and password2 are identical
	else if (password !== password2) {
        console.log('Passwords do not match');
		res.status(401).json({ message: 'Passwords do not match' });
	}
	// check password length
	else if (password.length <= 6) {
        console.log('Password should be more than 6 characters');
		res.status(401).json({ message: 'Password should be more than 6 characters' });
	}
    else {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); //hash password to store in database
        // check to see if the email is registered in the database
        pool.query(`SELECT * FROM users WHERE email = $1`, [email], (err, results) => {
            if (err) {
                throw err;
            }
            if (results.rows.length > 0) {
                console.log('Email already registered');
                res.json({ message: 'Email already registered' });
            } else {
                const newUserId = uuid.v4();
                pool.query(`INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)`, [newUserId, name, email, hashedPassword], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.log('Register done!');
                });
                pool.query(`INSERT INTO to_dos_order (order_seq, user_id) VALUES ($1, $2)`, ['{}', newUserId], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    console.log('No, really, register done!');
                });
                res.status(201).json({ message: null });
            }
        });
    }
	
});

module.exports = registerRouter;