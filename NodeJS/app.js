const express = require('express');

const app = express();

app.listen(8000);

app.set('view engine', 'ejs'); //using ejs

app.get('/', (req, res) => {
    //res.sendFile('./views/index.html', {root:__dirname});  html
    res.render('index');
})

app.get('/home', (req,res) => {
    res.redirect('/');
})

app.use((req,res) => {
    //res.status(404).sendFile('./views/404.html', {root:__dirname}); html
    res.render('404');
})