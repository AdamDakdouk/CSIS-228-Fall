const express = require ("express");
const router = express.Router();
const userController = require("../Contollers/user.contoller");

router.get("/getAllAsers", userController.getAllUsersController);
module.exports = router;