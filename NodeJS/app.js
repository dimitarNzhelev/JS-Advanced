const express = require('express');

const app = express();

app.listen(8000);

app.get('/', (req, res) => {
    res.sendFile('./index.html', {root:__dirname});

})

app.get('/home', (req,res) => {
    res.redirect('/');
})

app.use((req,res) => {
    res.status(404).sendFile('./404.html', {root:__dirname});
})