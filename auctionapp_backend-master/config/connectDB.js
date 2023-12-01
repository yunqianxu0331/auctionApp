const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://yunqianxu:n01392662@auctiondatabase.hd1nbov.mongodb.net/auctiondatabase?retryWrites=true&w=majority');
        console.log('Database Connected');

    } catch (err) {
        console.log('Unable to connect' + err.message);
    }
}

module.exports = connectDB;