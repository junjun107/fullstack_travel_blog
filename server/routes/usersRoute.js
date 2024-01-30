const express = require("express");
const { loginUser, registerUser } = require("../controller/userController");

const router = express.Router();

//register
router.post("/register", registerUser);

//login
router.post("/login", loginUser);

module.exports = router;
