
require("dotenv").config();


const express = require("express");
const app = express();
const port = process.env.APP_PORT || 3001; 

const userRouter = require("./api/users/user.router");

app.use(express.json());

app.get("/api", (req, res)=> 
    res.json({
        success: 1,
        message: "This is rest apis working."
    })
);

app.use("/api/users", userRouter);


app.listen(port, () =>
    console.log(`Server is up and running on PORT ${port}! `);
);
