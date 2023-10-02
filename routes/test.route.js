const express = require ("express");
const router = express.Router();
const { testController } = require("../Contollers/test.contoller");

router.get("/test", testController)

module.exports = router;