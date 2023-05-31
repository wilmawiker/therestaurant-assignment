const Booking = require("../models/Booking");

exports.getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const booking = await Booking.findById(bookingId);
    if (!booking) throw new Error("This product does not exist");
    return res.json({
      data: booking,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    console.log(bookings);
    return res.json({
      data: bookings,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
