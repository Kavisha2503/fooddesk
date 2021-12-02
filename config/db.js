const Pool  = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();

const devConfig = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    database: "cafeteria-managment",
    port: process.env.PORT,
}

const productionConfig = {
    connectionString: process.env.DATABASE_URL,  //from heroku addon 
    ssl: {
        rejectUnauthorized: false
    }
}
const pool  = new Pool(productionConfig);

module.exports = pool;

