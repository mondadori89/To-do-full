const express = require('express');
require('dotenv').config();
const expenseRoutes = require('./routes/expense');

// Running express server
const app = express();
const port = process.env.PORT || 8000;

// route middlewares
app.use('/api', expenseRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});