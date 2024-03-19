const express = require('express');
const router = express.Router();
const pool = require('../../db');

router.post('/', async (req, res) => {
    const { userID, firstName, lastName } = req.body;

    // Update data
    const query = 'UPDATE users SET firstname = $1, lastname = $2 WHERE userid = $3';

    const response = await pool.query(query, [firstName, lastName, userID]);

    console.log(response);

    res.json({
        response
    });
});

module.exports = router;