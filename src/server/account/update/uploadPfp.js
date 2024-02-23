const express = require('express');
const router = express.Router();
const pool = require('../../db');

router.post('/', async (req, res) => {
    const { img, id } = req.body;

    try {    
        if (!img) {
          return res.status(400).json({ message: 'No file uploaded' });
        }
    
        const imageBuffer = Buffer.from(img, 'base64');
    
        const query = 'UPDATE users SET profile_pic = $1 WHERE userid = $2';
        await pool.query(query, [imageBuffer, id]);
    
        res.status(200).json({ message: 'Image uploaded successfully' });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;