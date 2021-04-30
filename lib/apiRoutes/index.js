const router = require("express").Router();
const fs = require("fs");
const path = require("path");



router.get("/notes", (req, res) => {
    let results = notes || "hello";
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.post('/notes', (req, res) => {
    console.log(path.join( __dirname, "../../Develop/db/db.json"))
    let newNote = fs.readFileSync(path.join( __dirname, "../../Develop/db/db.json"), "utf-8")
    // req.body.id = notes.length.toString();
    console.log(req.body)
    console.log(newNote)
    console.log(__dirname)



    // if (!validateNotes(req.body)) {
    //     res.status(400).send('Invalid text')
    // } else {
    //     const note = createNewNote(req.body, notes);
    // }
    res.send("ok")
});

module.exports = router;