const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

if(process.env.REACT_APP_MODE === "production") {
    app.use(express.static('build'))
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "index.html"))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log("Server running on port:", PORT);
})