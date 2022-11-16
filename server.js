const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
var cors = require('cors');
require('dotenv').config();
const todosRoutes = require('./routes/todos');
const { loginRouter } = require('./routes/login');
const { sessionHandler } = require('./routes/profile');
const registerRouter = require('./routes/register');



// Running express server
const app = express();
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
}));


/* const corsOptions = {
    //To allow requests from client
    origin: [
      "http://localhost:8080",
      "http://localhost:8000",
      "http://127.0.0.1"
    ],
    // origin: ["*"],
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
}; */
//   app.use(cors(corsOptions))


app.use((req, res, next) => {
    // res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})



const port = process.env.PORT || 8000;


if (process.env.NODE_ENV === 'production') {
	app.use(express.static(__dirname + '/view/dist'));
} 
// app.use(express.static('view'));



app.get('/', (req, res) => {
    res.status(200).send('<h1>Wazaazaaa!</h1>')
});


// route middlewares

app.use(express.json());
app.use('/api', todosRoutes);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/profile/getuser', /* cors(corsOptions), */ sessionHandler);


app.listen(port, () => {
    console.log(`App listening at Port ${port}`);
});