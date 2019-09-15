const express = require('express');
const port = 3003;
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


routes(app)
const server = app.listen(port, err => {
    if(err) throw console.log(`error - ${err}`)
    console.log(`Server listening on port ${server.address().port}`);
});
