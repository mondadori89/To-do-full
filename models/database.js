const { Pool } = require('pg');

// in Heroku, NODE_ENV will be set to 'production'
const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const productionPool = new Pool({
    connectionString: process.env.DATABASE_URL, //Heroku addon will provide with a string called DATABASE_URL
    //ssl: { rejectUnauthorized: false }, 
});

const devPool = new Pool({
    connectionString: connectionString,
})

const pool = isProduction ? productionPool : devPool;

module.exports = pool;



/*
const pool = new Pool({
	connectionString: isProduction ? process.env.DATABASE_URL : connectionString, //Heroku addon will provide with a string called DATABASE_URL
	ssl: { rejectUnauthorized: false },  // comment to solution "Error: The server does not support SSL connections" on localhost
});


const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});
*/
