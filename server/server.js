// creating the connection 
const connection = require('./database/connection');

// creating express App
const express = require('express');
const app = express();

const cors = require('cors');

// config  dotenv
require('dotenv').config({ path: "./config.env" });
const PORT = process.env.PORT || 3003;


// use middlewares
app.use(cors());
app.use(express.json())

// using routes 
app.use(require('./routes/routes'))

// checking the health of  database 😀
connection.then((database) => {
    if (!database) return process.exit(1);

    // listen to http server when database connection is exist
    app.listen(PORT, () => {
        console.log(`app started on http://localhost:${PORT}`);
    })
    app.on('error', err => console.log(`falid to connect whit HTTP server`))

}
    // when connection is falid 
).catch(() => {
    console.log("connection  is failed");
})
