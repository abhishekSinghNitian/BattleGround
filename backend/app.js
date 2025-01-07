const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
require('dotenv').config();
require('./config/dbConnect.js')


const serverSettingsRoutes = require("./routes/serverSettings.routes.js");

app.use(express.json());
app.use(cors());

app.use('/api/settings', serverSettingsRoutes);
app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.listen(port, function() {
    console.log(`Server running on http://localhost:${port}`);
});