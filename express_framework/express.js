const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(usersRoutes);

app.listen(3000)