const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AuthRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

const app = express();

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})