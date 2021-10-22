const express = require("express");
const userService = require("../services/userSerivce");
const router = express.Router();
const { body, validationResult } = require("express-validator");

/* GET home page. */
router.get("/", (req, res, next) => {
   res.render("signin", {
      tabTitle: "TODO App - Sign in.",
      page: "signin",
   });
});

router.post(
   "/",
   body("email").notEmpty().isEmail().normalizeEmail().trim(),
   body("password")
      .notEmpty()
      .isLength({ min: 8 })
      .withMessage("Password should be atleast 8 characters long"),
   async (req, res, next) => {
      const { email, password } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      const user = await userService.getUser(email, password);

      if (user) {
         return res.json(user);
      }
      return res
         .status(400)
         .json({ error: "The email or password is incorrect." });
   }
);

module.exports = router;
