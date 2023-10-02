const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

const { query } = require("./database/db");

const userRoute = require("./routes/user.routes");
const testRoute = require("./routes/test.route")

app.get("/api", testRoute);
app.use("/api/users", userRoute);

app.listen(PORT);

console.log(`App is running on port ${PORT}`)