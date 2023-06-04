const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  table: {
    type: Number,
  },
  numberOfPeople: {
    type: Number,
  },
  sitting: {
    type: Number,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
