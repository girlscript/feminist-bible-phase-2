const express = require("express");
var router = express.Router();

const { sayHi } = require("../controllers/user");

router.get("/", sayHi);
module.exports = router;
