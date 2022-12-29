const express = require('express');
const app = express();
const port = 5000;



// decide routes

//1. /home
app.get('/', (req, res) => {
    console.log("heloooo.")
    res.send("/Home")
});

//2. /category
app.get('categories', (req, res) => {
    // fetch categories for dsb
    // const categories = db.categories.find(); so to do this I need to have a databse first
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