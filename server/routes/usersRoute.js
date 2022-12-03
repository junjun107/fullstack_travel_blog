const express = require("express");
const router = express.Router();

const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//register
router.post("/register", async (req, res) => {
  try {
    // To hash a password: generate a salt and hash on separate function calls
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    //save user to db
    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
  //   res.status(200).json({ message: "user created" });
});

//login

module.exports = router;
