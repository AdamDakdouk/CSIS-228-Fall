const express = require ("express");
const router = express.Router();
const userController = require("../Contollers/user.contoller");
const { insertUserValidAtion, updateUserValidAtion } = require("../validators/user.validator");
// const { escapeId } = require("mysql2");

router.get("/getAllUsers", userController.getAllUsersController);
router.post("/insertUser", insertUserValidAtion, userController.insertUserController);
router.put("/updateUser", updateUserValidAtion, userController.updateUserController);
router.post("/deleteUser", userController.deleteUserController);

module.exports = router;
