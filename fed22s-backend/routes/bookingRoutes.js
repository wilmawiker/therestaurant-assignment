const express = require("express");
const router = express.Router();
const {
  getBookingById,
  getAllBookings,
  createNewBooking,
} = require("../controllers/bookingController");

router.get("/:bookingId", getBookingById);
router.get("/", getAllBookings);
router.post("/", createNewBooking);

module.exports = router;
