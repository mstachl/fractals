
// Redirect all traffic from http to https.
const express = require('express');
const app = express(),
    port = 8080;


// Serve static files
app.use(express.static('dist/fractals'));

// Wait for a request to any path and redirect all of the requests to index.html
app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/fractals'});
});

// Listen for requests at the PORT specified by env variables or the default Heroku port, which is 8080.
app.listen(process.env.PORT || port, () => {
    console.log(`Server listening on the port::${port}`);
});
