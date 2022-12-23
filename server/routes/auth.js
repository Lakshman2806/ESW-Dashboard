const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
// Auth not required
router.post(
  "/createUser",
  [body("username").isEmail(), body("password").isLength({ min: 5 })],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //  Checking if user already exists
    try{
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = await User.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
    });
    res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Fuck error aagayaa")
    }
  }
);

module.exports = router;
