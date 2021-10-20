const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

/* GET home page. */
router.get("/", (req, res, next) => {
   res.render("signin", {
      tabTitle: "TODO App - Sign in.",
   });
});

router.post(
   "/",
   body("email").notEmpty().isEmail(),
   body("password")
      .notEmpty()
      .isLength({ min: 8 })
      .withMessage("Password should be atleast 8 characters long"),
   (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      res.json({
         email: req.body.email,
         password: req.body.password,
      });
   }
);

module.exports = router;
