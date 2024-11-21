const mongoose = require('mongoose');
const Book = require('../models/Book'); 
const books = require('./books');

function seedDB(MONGO_URI) {
// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected')
    console.log(books.length)
    
    Book.insertMany(books).then(function () {
        console.log("Data inserted") // Success 
    }).catch(function (error) {
        console.log(error)     // Failure 
    });;

    console.log("Database seeded! :)");

    })
  .catch((err) => console.log("---Mongo connection failed----", err))
}

module.exports = { seedDB: seedDB }