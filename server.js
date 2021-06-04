const express = require('express');
const app = express();
const { notes } = require('./Develop/db/db.json');

const apiRoutes = require('./lib/apiRoutes');
const htmlRoutes = require('./lib/htmlRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



// app.post('/notes', (req, res) => {
//     req.body = notes.length.toString();
//     const note = newNote(req.body, notes);
//     res.json(notes);
// })