const express = require('express');
const path = require('path');


const router = express.Router();

router.get('/add-product',(req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})

router.post('/view-product', (req, res) => {
    res.send(req.body.title);
})

module.exports = router;