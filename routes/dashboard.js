const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

/* GET home page. */
router.get("/", (req, res, next) => {
   res.render("dashboard", {
      tabTitle: "Home",
      tasks: [],
   });
});

router.post("/", body("text").notEmpty().trim(), (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   return res.json({
      taskText: req.body.task,
   });
});

module.exports = router;
