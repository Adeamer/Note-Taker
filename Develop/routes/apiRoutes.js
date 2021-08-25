// requiring fs module and settng the data for the db.json file into noteData
const express = require("express");
const fs = require("fs");
const noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

const apiRoutes = express();

//get route for the data in the db.json file
apiRoutes.get("/notes", (req, res) => {
    console.log(noteData);
    res.json(noteData);
});

//Post route for data going to db.json
apiRoutes.post("/notes", (req, res) =>{
    console.log("we are in the post!")
    let newNote = req.body;
    let uniqueId = (noteData.length).toString();
    console.log(uniqueId);
    newNote.id = uniqueId;
    noteData.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData), (err) => {
        if (err) throw (err);
    });
    res.json(noteData);
});

apiRoutes.delete("/notes/:id", function (req, res){
    let noteID = req.params.id;
    let newId = 0;
    console.log(`Deleting not with id ${noteID}`);
    noteData = dat.filter(currentNote => {
        return currentNote.id != noteID;
    });
    for (currentNote of noteData) {
        currentNote.id = newId.toString();
        newId++;
    }
    fs.writeFileSync("./db/dbjson", JSON.stringify(noteData));
});

module.exports = apiRoutes;