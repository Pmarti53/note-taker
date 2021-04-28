const express = require('express');
const app = express();
const { notes } = require('./Develop/db/db.json');

app.get('./')

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});
