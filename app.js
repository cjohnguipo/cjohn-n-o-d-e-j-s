require("dotenv").config();


const express = require("express");
const app = express();
const port = process.env.APP_PORT || 3001; 

app.listen(port, () =>
    console.log(`Server is up and running on PORT ${port}! `);
);
