const express = require('express');
const pool = require('../models/database');
const bcrypt = require('bcryptjs');
const registerRouter = express.Router();

registerRouter.post('/', async (req, res) => {
	const { name, email, password, password2 } = req.body;


	if (!name || !email || !password || !password2) {
		res.json({ message: 'Please enter all fields' });
	}
	// check if password and password2 are identical
	else if (password !== password2) {
		res.json({ message: 'Passwords do not match' });
	}
	// check password length
	else if (password.length <= 6) {
		res.json({ message: 'Password should be more than 6 characters' });
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
                res.json({ message: 'Email already registered' });
            } else {
                pool.query(`INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, hashedPassword], (err, results) => {
                    if (err) {
                        throw err;
                    }
                    res.status(201).redirect('/'); // CHANGE TO /login after puting on Client side
                });
            }
        });
    }
	
});

module.exports = registerRouter;