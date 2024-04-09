const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const scoresRouter = require('./routes/scores');

const SERVERDEVPORT: number = 4741;
const CLIENTDEVPORT: number = 5173;


app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${CLIENTDEVPORT}` }));


mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('connected', function () {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

app.use('/scores', scoresRouter);

const PORT = process.env.PORT || SERVERDEVPORT;

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})


module.exports = app