const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path');
require('dotenv').config();

const MONGO_URL = `mongodb+srv://sogateam:${process.env.MONGO_PASSWORD}@cluster0-rpt5d.mongodb.net/sogateam`;



const app = express();
app.use(morgan('dev'));
app.use(express.json({
    type: "application/json"
}));
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//routes
app.use('/api', require('./routes/player'));
app.use('/api', require('./routes/team'));

// app.use("/", require("./routes/home"));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true
    })
    .then(result => {
        let PORT = process.env.PORT || 5000;
        app.listen(PORT);
        console.log('Server started and DB Connected ' + PORT);
    })
    .catch(err => {
        console.log(err.message);
    });