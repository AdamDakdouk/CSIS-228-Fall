const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

const userRoute = require("./routes/user.routes");
const clientRoute = require("./routes/clientRoutes");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));

app.use("/api/users", userRoute);
app.use("/api/clients", clientRoute);

app.listen(PORT);

console.log(`App is running on port ${PORT}`)