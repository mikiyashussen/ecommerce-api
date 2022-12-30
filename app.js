const express = require('express');
const app = express();
const port = 5000;
const mongoose = require("mongoose");

// connect to the db
mongoose.connect('mongodb+srv://admin:adminuser@habesha_tech_shop.fvd6c2e.mongodb.net/?retryWrites=true&w=majority').
then(console.log('connection to db successful')).catch((err) => {
    console.log(err);
    // need to handle this, if connection not successful whole appliction will stop
})


// decide routes

//1. /home
app.get('/', (req, res) => {
    console.log("heloooo.")
    res.send("/Home")
});

//2. /category
app.get('categories', (req, res) => {
    // fetch categories from db
    // const categories = db.categories.find(); so to do this I need to have a database first
    // send obj to client
    // res.send(categories)
})
//3. /category:id

//4. /buynow

//5. /cart

//6. /payment

//7. /Auth


app.listen(port, () => {
    console.log("listening on port 5000")
})