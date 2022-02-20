// import Express
const { json } = require("express");
const express = require("express");

// instantiated instance
const app = express();

// allow us to parse json
app.use(express.json());

//Index
app.get("/", (req, res) => {
    
    res.sendFile('index.html',{root:'public'});

});

app.listen(5000);