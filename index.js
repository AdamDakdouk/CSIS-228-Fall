const express = require("express");
const app = express();
const { fillDummyData, readData, getUsers } = require("./test");
const PORT = 3001;

app.get("/", (req,res) => {
    res.status(200).json({
        message:"Hello from the server side",
    })
});

app.get("/users", async(req,res) =>  {
    try{
        await fillDummyData();
        const users = getUsers();
        if(users && users.length>0)
            res.status(200).json({
                users,
            });
        else
            res.status(200).json({
                message:"No users",
            })
    }catch(err){
        res.status(500).json({
            message: `An error has occured ${err}`,
        })
    }
});

app.listen(PORT);