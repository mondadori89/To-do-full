const pool = require('../models/database');
const bcrypt = require('bcryptjs');

exports.getAll = async (req, res) => {
    const userId = req.params.id;
    console.log("Get All requested");
    console.log("user id to fetch to dos: " + userId);
    const allToDosList = await pool.query( 'SELECT * FROM to_dos WHERE user_id = $1 ORDER BY description', [userId] );
    return res.status(200).send(allToDosList.rows);
};

exports.getToDo = async (req, res) => {
    const id = req.params.id;
    const toDoFetchedResponse = await pool.query( 'SELECT * FROM to_dos WHERE id = $1', [id]);
    const toDoFetched = toDoFetchedResponse.rows[0];
    return res.status(200).send(toDoFetched);
};

exports.create = async (req, res) => {
    console.log("Post requested");
    const { id, description, status, user_id } = req.body;
    console.log(description);
    const newTodo = await pool.query( 'INSERT INTO to_dos (id, description, status, user_id) VALUES ($1, $2, $3, $4)', [id, description, status, user_id] );
    return res.status(201).send('New to do included');
};

exports.remove = async (req, res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM to_dos WHERE id = $1', [id]);
    return res.status(204).send(`To do deleted with ID: ${id}`);
};

exports.updateStatus = async (req, res) => {
    const id = req.params.id;
    const oldStatusRes = await pool.query( 'SELECT status FROM to_dos WHERE id = $1', [id]);
    const oldStatus = oldStatusRes.rows[0].status;
    if (!oldStatus) {
        await pool.query('UPDATE to_dos SET status = true WHERE id = $1', [id]);
        return res.status(200).send(`To do status updated to true`);
    } else {
        await pool.query('UPDATE to_dos SET status = false WHERE id = $1', [id]); 
        return res.status(200).send(`To do status updated to false`);
    }
};

exports.setListOrder = async (req, res) => {
    const userId = req.params.id;
    const listOrder = req.body;
    const listUpdated = await pool.query( 'UPDATE to_dos_order SET order_seq = $1 WHERE user_id = $2', [listOrder, userId]);
    return res.status(200).send(listUpdated.rows);
};

exports.getListOrder = async (req, res) => {
    const userId = req.params.id;
    console.log('getListOrder user id: ' + userId)
    const listqueried = await pool.query( 'SELECT order_seq FROM to_dos_order WHERE user_id = $1', [userId]);
    return res.status(200).send(listqueried.rows[0]);
};

exports.validateLogin = async (req, res, next) => {
    const { email, password } = req.body;

    const userFetched = await pool.query( 'SELECT * FROM users WHERE email = $1', [email]);
    const user = userFetched.rows[0];

    if (!user) {
        console.log("Beeee wrong email!")
        res.status(401).json({ msg: "Beeee wrong email!" }).end;
        return;
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
            throw err;
        }
        //if the passwords match
        if (isMatch) {
            req.user = user;
            return next();
        } else {
            console.log("Beeee wrong password!")
            res.status(401).json({ msg: "Beeee wrong password!" }).end;
            return;
        }
    });
};