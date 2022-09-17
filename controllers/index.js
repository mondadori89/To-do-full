const pool = require('../models/database');

exports.getAll = async (req, res) => {
    console.log("Get All requested");
    const allToDosList = await pool.query( 'SELECT * FROM to_dos ORDER BY description' );
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
    const { id, description, status } = req.body;
    console.log(description);
    const newTodo = await pool.query( 'INSERT INTO to_dos (id, description, status) VALUES ($1, $2, $3)', [id, description, status] );
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
    const id = req.params.id;
    const listOrder = req.body;
    const listUpdated = await pool.query( 'UPDATE to_dos_order SET order_seq = $1 WHERE id = $2', [listOrder, id]);
    return res.status(200).send(listUpdated.rows);
};
