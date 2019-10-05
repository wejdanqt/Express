const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/cars", (req, res) => {
    res.render('cars');
})
app.get("/cats", (req, res) => {
    res.render('cats');
})

app.get("/cat1", (req, res) => {
    // hard-coded user data
    var cat_array = [
        {name: "Caty", food: "Tuna"}, 
    ];
    res.render('details', {cats: cat_array});
})
app.get("/cat2", (req, res) => {
    // hard-coded user data
    var cat_array = [
        {name: "kitten", food: "Milk"}, 
    ];
    res.render('details', {cats: cat_array});
})
app.get("/cat3", (req, res) => {
    // hard-coded user data
    var cat_array = [
        {name: "Lucky", food: "Fish"}, 
    ];
    res.render('details', {cats: cat_array});
})
app.get("/cars/new", (req, res) => {
    res.render('form');
})
app.listen(8000, () => console.log("listening on port 8000"));
