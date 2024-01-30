const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.register(username, email, password);

    //create a token
    const token = generateToken(user._id);

    res.status(200).json({ username, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(req.headers);
    const user = await User.login(email, password);

    //if match, create a token
    const token = generateToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };
