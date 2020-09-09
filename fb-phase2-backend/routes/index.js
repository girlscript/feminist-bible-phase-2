const router = require("express").Router();

router.get("/", (req, res) => res.send("Render Landing Page"));
router.get("/code_of_conduct", (req, res) =>
  res.send("Render Code of Conduct Page")
);
router.get("/about-us", (req, res) => res.send("Render About Us Page"));
