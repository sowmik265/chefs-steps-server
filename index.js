const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefsDetails = require('./Data/chefsdetails.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('food is cooking')
});

app.get('/chefsdetails', (req, res) => {
    res.send(chefsDetails)
})

app.listen(port, () => {
    // console.log(`food is cooking on port :${port}`)
});