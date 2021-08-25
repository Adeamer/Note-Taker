const express = require("express");
const path = require("path");

const htmlRoutes = express();

//get route to the index.html
htmlRoutes.get("/", (req, res) => res.sendFile(path.join(__dirname, "/../public/index.html")));

// get route to notes.html
htmlRoutes.get("/notes", (req, res) => {
    
    res.sendFile(path.join(__dirname, "/../public/notes.html"));

});
module.exports = htmlRoutes;