const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', function (req, res) {
    res.send('Oscar Rene Rodriguez Vasquez - 201908335 ');
});

app.listen(4000, () => {
    console.log('Funcionando en puerto 4000');
});