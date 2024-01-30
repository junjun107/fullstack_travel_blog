const mongoose = require("mongoose");

const logEntrySchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
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
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("LogEntry", logEntrySchema);
