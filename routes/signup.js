const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

/* GET users listing. */
router.get("/", (req, res, next) => {
   res.render("signup", { tabTitle: "TODO - Registeration" });
});

router.post(
   "/",
   body("fname").notEmpty().isLength({ min: 2 }),
   body("lname").notEmpty().isLength({ min: 2 }),
   body("email").notEmpty().isEmail().normalizeEmail(),
   body("password").notEmpty().isLength({ min: 8 }),
   (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({
            status: 400,
            message: "Please provide correct information.",
         });
      }
      return res.json(req.body);
   }
);

module.exports = router;
