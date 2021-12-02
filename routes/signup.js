const { Router } = require('express');
const pool = require('../config/db');
const bcryptjs = require('bcryptjs');
const signup = Router();

signup.post('/signup', (req, res) => {
    pool.query(`SELECT * FROM users WHERE username='${req.body.user}' OR email='${req.body.email}';`, async (error, results) => {
        if (error) {
            res.status(500).send(error);
        }
        if (results.rowCount === 0) {
            const hashpwd = await bcryptjs.hash(req.body.pwd, 10);
            pool.query(`INSERT INTO users (username, password, email) VALUES ('${req.body.user}','${hashpwd}','${req.body.email}') RETURNING username;`, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                if (result.rows.length > 0) {
                    res.status(200).send(result.rows[0]);
                }
            });
        } else {
            res.status(500).send(undefined);
        }
    })
})

module.exports = signup;