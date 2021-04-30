const app = require("express").app();

app.get("/notes", (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

app.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNotes(req.body)) {
        res.status(400).send('Invalid text')
    } else {
        const note = createNewNote(req.body, notes);
    }
});

module.exports = app;