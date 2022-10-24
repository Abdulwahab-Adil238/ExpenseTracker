const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://127.0.0.1:27017/ExpenseTracker')
    .then((database) => {
        console.log('Mango connected successfully')
        return database;
    })
    .catch((err) => console.log(err));
module.exports = connection;