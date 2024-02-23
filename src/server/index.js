const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const cors = require('cors');

app.use(express.json());
app.use(cors());

// Import middleware
const register = require('./auth/register');
const login = require('./auth/login');
const getData = require('./account/getData');
const uploadPfp = require('./account/update/uploadPfp');

// Use middleware
app.use('/api/register', register);
app.use('/api/login', login);
app.use('/api/get-account-data', getData);
app.use('/api/upload-pfp', uploadPfp);

// demoPW123123!
// AdminPassword123!

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});