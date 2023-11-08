const express = require ("express");
const router = express.Router();
const userController = require("../Contollers/user.contoller");
const { insertUserValidAtion, updateUserValidAtion } = require("../validators/user.validator");
const { insertClientController, getAllClientsController, updateClientController, deleteClientController } = require("../Contollers/clientController");
// const { escapeId } = require("mysql2");

router.get("/getAllClients", getAllClientsController);
router.post("/insertClient", insertClientController);
router.put("/updateClient", updateUserValidAtion, updateClientController);
router.post("/deleteClient", deleteClientController);

module.exports = router;
