const express = require('express');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { user, password } = req.body;

        if (!user || user === '' || !password || password === '') {
            return res.json({
                success: false,
                error: 'Invalid username or password'
            });
        }

        // Check if password & username match
        const query = 'SELECT * FROM users WHERE username = $1';
        const { rows } = await pool.query(query, [user]);

        if (rows.length === 0) {
            return res.json({
                success: false,
                error: 'Incorrect username or password'
            });
        }

        const foundUser = rows[0];

        const passwordMatch = await bcrypt.compare(password, foundUser.password);

        if (!passwordMatch) {
            return res.json({
                success: false,
                error: 'Incorrect username or password'
            });
        }

        // Sign token & cookie
        jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1h' }, (err, token) => {
            if (err) {
                return res.sendStatus(500);
            }
            res.json({
                success: true,
                message: 'Authentication successful',
                token
            });
        });
        
    } catch (error) {
        console.error('Error: ', error);

        res.status(500).json({
            error: 'Internal Server Error' 
        });
    }
});

module.exports = router;