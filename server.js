const express = require('express');
var cors = require('cors');
require('dotenv').config();
const todosRoutes = require('./routes/todos');

// Running express server
const app = express();
app.use(cors());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).send('<h1>Wazaazaaa!</h1>')
});

// route middlewares
// app.use(express.static('view'));
app.use(express.json());
app.use('/api', todosRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});