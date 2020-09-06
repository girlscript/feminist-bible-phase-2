const express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Project has started!!!!");
});

module.exports = router;
