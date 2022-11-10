const express = require('express');
const pool = require('../models/database');
const { sessions } = require('./login');



// get user session
const sessionHandler = (req, res) => {

	if (!req.headers.cookie) {
        res.status(401).json({msg: 'No cookie on jar'}).end()
		console.log('no cookie =(')
        return
    }
    console.log('SessionCookie >> ', req.headers.cookie);

	// We can obtain the session token from the requests cookies, which come with every request
	const sessionToken = req.headers.cookie.split('=')[1];
	console.log('SessionToken >> ', sessionToken);
	console.log('SESSIONS >> ', sessions);

	if (!sessions[sessionToken]) {
		res.status(401).end()
		console.log('no session with that token...')
		return
	}

	// if the session has expired, return an unauthorized error, and delete the session from our map
    if (sessions[sessionToken].expiresAt < Date.now()) {
        delete sessions[sessionToken]
        res.status(401).end()
        console.log('your session has expired bruh')
        return
    }

    // To manage the sessions, this will delete any expired session 
    for (const session in sessions) {
        if (sessions[session].expiresAt < Date.now()) {
            delete sessions[session]
        }
    }

    // If all checks have passed, we can consider the user authenticated and send the user info 
    // returns {email: xxx, name: xxx, expiresAt: xxx}
    res.json({user: sessions[sessionToken]}).end()

	//const { id, name, email } = req.user;
	//res.send({ id: id, name: name, email: email });
};


module.exports = {
	sessionHandler,
}