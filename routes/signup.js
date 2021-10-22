const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const { createUser } = require("../services/userSerivce");

/* GET users listing. */
router.get("/", (req, res, next) => {
   res.render("signup", { tabTitle: "TODO - Registeration", page: "signup" });
});

router.post(
   "/",
   body("fname").notEmpty().isLength({ min: 2 }).trim(),
   body("lname").notEmpty().isLength({ min: 2 }).trim(),
   body("email").notEmpty().isEmail().normalizeEmail().trim(),
   body("password").notEmpty().isLength({ min: 8 }),
   async (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({
            status: 400,
            message: "Please provide correct information.",
         });
      }
      const result = await createUser(
         req.body.fname,
         req.body.lname,
         req.body.email,
         req.body.password
      );

      switch (result) {
         case "USER_CREATED":
            return res.json({ message: "User created succesfully" });
            break;
         case "USER_EXIST":
            return res
               .status(400)
               .json({ message: "Email exist please user another email." });
            break;
         default:
            return res.status(500).json({
               message: "Server side error has accord please try again",
            });
            break;
      }
   }
);

module.exports = router;
