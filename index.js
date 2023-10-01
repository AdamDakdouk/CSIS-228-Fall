const express = require("express");
const app = express();
require("dotenv").config();

const { query } = require("./database/db");


const PORT = process.env.PORT;

app.get("/", (req,res) => {
    res.status(200).json({
        message:"Hello from the server side",
    });
});

app.get("/users", async(req,res) =>  {
    try{
        const userSQL = `SELECT * FROM users`;
        const users = await query(userSQL);
        res.status(200).json({users});
    }catch(err){
        res.status(500).json({message: "Internal server error"});
    }
});


console.log(`App is running on port ${PORT}`)

app.listen(PORT);