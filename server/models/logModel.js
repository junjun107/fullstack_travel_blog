const mongoose = require("mongoose");

const logEntrySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    image: String,
    // imageDate: {
    //   type: Date,
    //   required: true,
    // },
    latitude: {
      type: Number,
      min: -90,
      max: 90,
      required: true,
    },
    longitude: {
      type: Number,
      min: -180,
      max: 180,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("LogEntry", logEntrySchema);
