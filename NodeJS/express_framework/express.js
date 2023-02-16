const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/admin');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin',adminRoutes);
app.use(usersRoutes);

app.listen(3000)