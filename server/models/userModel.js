const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 2,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      required: true,
      type: String,
      min: 4,
    },
  },
  { timestamps: true }
);

//static register method
userSchema.statics.register = async function (username, email, password) {
  //validation
  if (!email || !password) {
    throw Error("All Fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid ");
  }
  // if (!validator.isStrongPassword(password)) {
  //   throw Error("Password is not strong enough");
  // }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email is already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hashedPassword });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  // check value has value
  if (!email || !password) {
    throw Error("All field must be filled");
  }
  // check user exisit in db
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email");
  }
  // compare pw
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};
module.exports = mongoose.model("User", userSchema);
