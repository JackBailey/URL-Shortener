const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.js"));

router.use("/link", require("./link.js"));

router.use("/import", require("./import.js"));

router.use("/export", require("./export.js"));

router.use("/sharex", require("./sharex.js"));

router.use("/about", require("./about.js"));

router.get("/", (req, res) => {
	res.send("OK");
});

module.exports = router;
