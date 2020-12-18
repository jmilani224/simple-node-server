var express = require("express");
const fetch = require('node-fetch');

var app = express();
let fetchedData
fetch('https://ghibliapi.herokuapp.com/films')
        .then(response => response.json())
        .then(data => {fetchedData = data})
        .catch(err => console.log(err))

app.get("/ghibli", (req, res, next) => {
    res.json(fetchedData);
   });
app.listen(3000, () => {
 console.log("Server running on port 3000");
});