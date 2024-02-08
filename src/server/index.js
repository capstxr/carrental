const express = require('express');
require('dotenv').config();
const axios = require('axios');

const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT;
const cors = require('cors');

const pool = require('./db');

app.use(express.json());
app.use(cors());

// demoPW123123!
// AdminPassword123!

app.post('/api/register', async (req, res) => {
    const { user, email, password, confirm_password } = req.body;

    try {
        // Validation
        if (!user || user === '')
            return res.json({
                success: false,
                error: 'Missing username',
                id: 'user'
            });

        if (!email || email === '')
            return res.json({
                success: false,
                error: 'Missing email',
                id: 'email'
            });

        // Check if username or email exists in database
        const UserCheck = `SELECT * FROM users WHERE username = $1`;
        const UserCheckResult = await pool.query(UserCheck, [user]);

        if (UserCheckResult.rows.length > 0)
            return res.json({
                success: false,
                error: "Username already exists",
                id: 'user'
            });

        const EmailCheck = `SELECT * FROM users WHERE email = $1`;
        const EmailCheckResult = await pool.query(EmailCheck, [email]);

        if (EmailCheckResult.rows.length > 0)
            return res.json({
                success: false,
                error: "Email already exists",
                id: 'email'
            });

        if (!password || password === '')
            return res.json({
                success: false,
                error: 'Missing password',
                id: 'confirm'
            });

        var specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

        if (!specialChar.test(password))
            return res.json({
                success: false,
                error: 'Password must contain at least one special character.',
                id: 'confirm'
            });
            
        if (password.includes(' '))
            return res.json({
                success: false,
                error: 'Password cannot contain any spaces',
                id: 'confirm'
            });

        if (password.length < 8)
            return res.json({
                success: false,
                error: 'Password must be atleast 8 characters long.',
                id: 'confirm'
            });

        if (!confirm_password || confirm_password !== password)
            return res.json({
                success: false,
                error: "Passwords don't match",
                id: 'confirm'
            });

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPw = await bcrypt.hash(password, salt);

        // Insert user into table
        const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;

        const values = [user, email, hashedPw];
        const result = await pool.query(query, values);

        return res.json({
            success: true
        });
    } catch (error) {
        console.error('Error: ', error);

        res.status(500).json({
            error: 'Internal Server Error' 
        });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { user, password } = req.body;

        if (!user || user === '' || !password || password === '') {
            return res.json({
                success: false,
                error: 'Invalid username or password'
            });
        }

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

        return res.json({
            success: true,
            message: 'Authentication successful'
        });
    } catch (error) {
        console.error('Error: ', error);

        res.status(500).json({
            error: 'Internal Server Error' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});