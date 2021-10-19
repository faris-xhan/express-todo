const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
   res.render("dashboard", {
      tabTitle: "Home",
      tasks: [],
   });
});

router.post("/", (req, res, next) => {
   return res.json({
      taskText: req.body.task,
   });
});

module.exports = router;
