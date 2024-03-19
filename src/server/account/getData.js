const express = require('express');
const router = express.Router();
const pool = require('../db');
const jwt = require('jsonwebtoken');

function GetProfilePicture(binary) {
    const base64Image = binary.toString('base64');
    const imageUrl = `data:image/png;base64,${base64Image}`;
    return imageUrl;
}

router.post('/', async (req, res) => {
    const { token } = req.body;

    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: 'Failed to authenticate token'
            });
        } else {
            const { user } = decoded;

            // Get data from SQL table
            const query = 'SELECT * FROM users WHERE username = $1';
            const response = await pool.query(query, [user]);

            let profilePicture = null;
            if (response.rows[0].profile_pic) {
                profilePicture = await GetProfilePicture(response.rows[0].profile_pic);
            }

            let firstName = response.rows[0].firstname || null;
            let lastName = response.rows[0].lastname || null;

            res.json({
                success: true,
                message: response.rows[0],
                username: user,
                pfp: profilePicture
            });
        }
    });
});

module.exports = router;