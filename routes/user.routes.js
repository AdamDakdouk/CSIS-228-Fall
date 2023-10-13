const express = require ("express");
const router = express.Router();
const userController = require("../Contollers/user.contoller");

router.get("/getAllUsers", userController.getAllUsersController);
router.post("/insertUser", userController.insertUserController);
router.post("/updateUser", userController.updateUserController);
router.post("/deleteUser", userController.deleteUserController);
module.exports = router;