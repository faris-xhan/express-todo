const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
   res.render("signin", {
      tabTitle: "TODO App - Sign in.",
   });
});

router.post("/", (req, res, next) => {
   console.log(req.headers);
   return res.json({
      email: req.body.email,
      password: req.body.password,
   });
});

module.exports = router;
