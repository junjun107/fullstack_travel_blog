const mongoose = require("mongoose");

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
      require: true,
      type: String,
      min: 4,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
