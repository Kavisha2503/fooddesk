const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const pool = require('../config/db');
const login = Router();

login.post('/login', (req, res) => {
    pool.query(`SELECT * FROM users WHERE username = '${req.body.user}';`, (error, results) => {
        if (error) {
            res.status(500).send(error);
        }
        if (results.rows.length > 0) {
            bcryptjs.compare(req.body.pwd, results.rows[0].password, (err, isMatch) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.status(isMatch ? 200 : 500).send(isMatch ? results.rows[0] : undefined);
            });
        } else {
            res.status(500).send(undefined);
        }
    });
});

module.exports = login;