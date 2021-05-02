const router = require("express").Router();
const fs = require("fs");
const path = require("path");

router.get("/notes", (req, res) => {
    let notes = fs.readFileSync(path.join( __dirname, "../../Develop/db/db.json"), "utf-8");
    let results = notes || "hello";

    // console.log("this is from GET", notes)
    JSON.parse(results)
    
});

router.post('/notes', (req, res) => {

    req.body = newNote.length.toString();
    const newNote = saveNote(req.body, notes);
    res.json(notes)
    // let saveNote = fs.writeFileSync(path.join(__dirname, '../../Develop/db/db.json'));
    //     JSON.stringify({ notes: notesArray }, null, 2));
    console.log(req.body)
    console.log(res.body)


});

// router.post('/notes', (req, res) => {
//         // let saveNote = fs.writeFileSync(path.join(__dirname, '../../Develop/db/db.json'));
//         //     JSON.stringify({ notes: notesArray }, null, 2));
//     console.log(req.body)
//     console.log(res.body)


// });

module.exports = router;