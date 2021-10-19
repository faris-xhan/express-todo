const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
   res.render("signup", { tabTitle: "TODO - Registeration" });
});

router.post("/", (req, res, next) => {
   return res.json(req.body);
});

module.exports = router;
