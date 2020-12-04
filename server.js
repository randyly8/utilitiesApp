const express = require('express');
const https = require('https');
const api = require('./apiKey')

const app = express();

app.get('/api/weather/:location', (req, res) => {   
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&appid=${api.weatherApi}`, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data));
            res.json(data);
        });
    }).on("error", (err) => { 
        console.log("Error: " + err.message);
    });
})

const port = 5000; 
 
app.listen(port, () => console.log(`Sever started on port ${port}`));