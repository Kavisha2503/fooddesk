const { Router } = require('express');
const bcryptjs = require('bcryptjs');
const pool = require('../config/db');
const changepwd = Router();

changepwd.put('/changepwd', (req, res) => {
    pool.query(`SELECT * FROM users WHERE username = '${req.body.user}';`, async (error, results) => {
        if (error) {
            res.status(500).send(error);
        }
        if (results.rows.length > 0) {
            const hashpwd = await bcryptjs.hash(req.body.newpwd, 10);
            pool.query(`UPDATE users SET password = '${hashpwd}' WHERE username = '${req.body.user}' RETURNING username, password;`, (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.status((results === undefined) ? 500 : 200).send((results === undefined) ? results : result.rows[0]);
            });
        } else {
            res.status(500).send(undefined);
        }
    });
});

module.exports = changepwd;