// Server Setup
const express = require("express");
const app = express();
//body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//
var path= require('path');
//pug set up
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "pug");
//
//Port
const PORT = 3000;
//
//routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.render('home');
});

app.get("/action", function(req, res){
    res.render('action')
});

app.get("/fantasy", function(req, res){
    res.render('fantasy')
});

app.get("/mistery", function(req,res){
    res.render("mistery")
});

app.get("/romance", function(req,res){
    res.render("romance")
});

//
//Start Server 
app.listen(PORT, () => console.log(`Book app listening on port ${PORT}`));
//