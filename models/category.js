 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const categorySchema = new Schema({
    name: {
        type: String,
        require: true
    }
 }, { timestamps: true });

 const Category = mongoose.model('Category', categorySchema);

 // the name passed to the mongoose.model is really important as this the name the monodb use
 // to identify the collection that we want to interact with. it will plularize it and compare to
 // the collections that you have in your database.

module.exports = Category;  