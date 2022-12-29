const express = require('express');


const app = express();
const port = 5000;
console.log("whattt ")
app.get('/', (req, res) => {
    console.log("heloooo.")
    res.send("hellooooo")
});


app.listen(port, () => {
    console.log("listening on port 5000")
})