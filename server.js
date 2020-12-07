const express = require('express');
const https = require('https');
const api = require('./apiKey');

const app = express();

let coordinates = []

app.get('/api/weather/:location', (req, res) => {
    let coordinates = []
    https.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.location}&appid=${api.weatherApi}`, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            const Jdata = JSON.parse(data);
            coordinates = [Jdata.coord.lat, Jdata.coord.lon]
            // console.log(coordinates)

            https.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${api.weatherApi}`, (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received. Print out the result.
                resp.on('end', () => {
                    // console.log(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${api.weatherApi}`)
                    // console.log(JSON.parse(data).timezone_offset);

                    const Jdata = JSON.parse(data);
                    res.json([
                        Jdata.current, 
                        Jdata.minutely, 
                        Jdata.hourly, 
                        Jdata.daily,
                        Jdata.timezone_offset
                    ]);
                });
            }).on("error", (err) => {
                console.log("Data fetch error: " + err.message);
            });
        });

    }).on("error", (err) => {
        console.log("Coordinates fetch error: " + err.message);
    });
})

const port = 5000;

app.listen(port, () => console.log(`Sever started on port ${port}`));