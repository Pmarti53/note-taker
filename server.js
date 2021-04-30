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

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});
