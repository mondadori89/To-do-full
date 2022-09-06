const express = require('express');
require('dotenv').config();
const todosRoutes = require('./routes/todos');

// Running express server
const app = express();

const port = process.env.PORT || 8000;

// route middlewares
app.use(express.json());
app.use('/api', todosRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});