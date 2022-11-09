const express = require('express');
const pool = require('../models/database');
require('dotenv').config();
const uuid = require('uuid');
const { validateLogin } = require('../controllers/index');

const loginRouter = express.Router();


class Session {
    constructor(id, email, name, expiresAt) {
        this.id = id
        this.email = email
        this.name = name
        this.expiresAt = expiresAt
    }

    isExpired() {
        this.expiresAt < (new Date())
    }
}

const sessions = {}


loginRouter.post('/', validateLogin, (req, res) => {

    const user = req.user;
    console.log(user);


	// generate a random UUID as the session token
    const sessionToken = uuid.v4();

	const now = new Date()
    const expiresAt = new Date(+now + 600 * 1000)

	// create a session containing information about the user and expiry time
    const session = new Session(user.id, user.email, user.name, expiresAt)

    // add the session information to the sessions map
    sessions[sessionToken] = session
    console.log('NEW SESSION >>> ', sessionToken)

    // In the response, set a cookie on the client 
    res.set('Set-Cookie', `session=${sessionToken}`);
    res.json({id: user.id, email: user.email, name: user.name}).end()
});


module.exports = {
    sessions,
	loginRouter
}