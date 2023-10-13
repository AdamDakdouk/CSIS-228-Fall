const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

const { query } = require("./database/db");

const app = express();
const PORT = process.env.PORT;

const userRoute = require("./routes/user.routes");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));

app.use("/api/users", userRoute);

app.listen(PORT);

console.log(`App is running on port ${PORT}`)