const express = require("express");
const router = express.Router();
const {
  getBookingById,
  getAllBookings,
} = require("../controllers/bookingController");

router.get("/:bookingId", getBookingById);
router.get("/", getAllBookings);

module.exports = router;
