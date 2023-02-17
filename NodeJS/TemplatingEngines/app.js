const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const users = [];
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/users', (req, res) => {
    users.push(req.body.name);
    res.render('users', {users: users});
});


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000);