const mongoose = require('mongoose');

const url = process.env.ERS_DB_URI; // mongoodb url
mongoose.connect(url); // connecting to db

const db = mongoose.connection; // getting connection of db

db.on('error', console.error.bind(console, 'Error: connecting to db :: MongoDB')); // if error while conecting to db


// once connection is open (started)
db.once('open', (err) => {
    if (err) {
        console.log('Error: while opening db connection', err);
    } else {
        console.log('Database is succesfully connects with the mongodb');
    }
})


module.exports = db;