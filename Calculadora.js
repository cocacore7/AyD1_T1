const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/suma', function (req, res) {
	var Num1 = req.body.numero1 || 0;
	var Num2 = req.body.numero2 || 0;

    res.send('respuesta: ' + (Num1+Num2));
});

app.listen(3000, () => {
    console.log('Funcionando en puerto 3000');
});