const pool = require('../models/database');

exports.getAll = async (req, res) => {
    console.log("Get All requested");
    const allToDosList = await pool.query( 'SELECT * FROM to_dos' );
    return res.status(201).send(allToDosList.rows);
};

exports.create = async (req, res) => {
    const { description } = req.body;
    console.log(description);
    const newTodo = await pool.query( 'INSERT INTO to_dos (description, status) VALUES ($1, false)', [description] );
    return res.status(201).send('New to do included');
};

exports.remove = async (req, res) => {
    const id = Number(req.params.id);
    await pool.query('DELETE FROM to_dos WHERE id = $1', [id]);
    return res.status(200).send(`To do deleted with ID: ${id}`);
};

