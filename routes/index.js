const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
   res.render("index", {
      tabTitle: "TODO App - Keep track of your task easily.",
      page: "home",
   });
});

module.exports = router;
