// App - BlingBank - Dan Alphonza
// Express - REST API
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cors - Cross-Origin Resource Sharing
const cors = require('cors');
app.use(cors());
// BodyParser - req.body and Strip to JSON
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REST API
const API_Routers = require('./router');
app.use('/api', API_Routers);
// 404 redirect
app.all('*', (req, res) => { 
    res.status(500).send("404 Error #blingBank") 
});

// API Port
const APP_PORT = 5000;
// API Starting
app.listen(APP_PORT, () => { 
    console.log("\n")
    console.log("App: " + process.env.npm_package_name + " v" + process.env.npm_package_version)
    console.log("Server running at http://localhost:" + APP_PORT)
    console.log("\n")
});