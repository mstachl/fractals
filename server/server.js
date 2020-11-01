const express = require('express');
const nodemailer = require('nodemailer');


const app = express(),
      bodyParser = require("body-parser");
      port = 3080;




app.use(bodyParser.json());


const message = {
    from: 'test@test.com', // Sender address
    to: 'markus.stachl@googlemail.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};

app.post('/api/mail', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})


app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});