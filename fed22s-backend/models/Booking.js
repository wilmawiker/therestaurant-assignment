const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
