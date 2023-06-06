const express = require("express");
const router = express.Router();
const {
  getBookingById,
  getAllBookings,
  createNewBooking,
  deleteBookingById,
  updateBookingById,
} = require("../controllers/bookingController");

router.get("/:bookingId", getBookingById);
router.get("/", getAllBookings);
router.post("/", createNewBooking);
router.delete("/:bookingId", deleteBookingById);
router.put("/:bookingId", updateBookingById)

module.exports = router;
