const Booking = require("../models/Booking");

exports.getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const booking = await Booking.findById(bookingId);
    if (!booking) throw new Error("This booking does not exist");
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

exports.getAllBookingsByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);

    let query = {
      date: { $gte: startDate, $lt: endDate },
    };

    if (req.query.sitting) {
      query.sitting = req.query.sitting;
    }

    const bookings = await Booking.find(query);

    if (bookings.length === 0) {
      return res.status(404).json({
        message: "No bookings found for the specified date and sitting.",
      });
    }

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



exports.createNewBooking = async (req, res) => {
  try {
    const {
      numberOfPeople,
      sitting,
      firstName,
      lastName,
      email,
      phoneNumber,
      date,
    } = req.body;

    if (
      !numberOfPeople ||
      !sitting ||
      !firstName ||
      !lastName ||
      !email ||
      !phoneNumber ||
      !date
    ) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const tableSize = 6;
    const tablesPerSitting = 15;

    const tablesNeeded = Math.ceil(numberOfPeople / tableSize);
    const occupiedTables = await Booking.find({ sitting, date });

    if (occupiedTables.length + tablesNeeded > tablesPerSitting) {
      return res.status(400).json({
        message: "No available tables for the selected sitting and date.",
      });
    }

    const occupiedTableNumbers = occupiedTables.reduce(
      (numbers, table) => numbers.concat(table.table),
      []
    );

    const availableTables = [];
    let remainingTablesNeeded = tablesNeeded;
    let currentTableNumber = 1;

    while (
      remainingTablesNeeded > 0 &&
      currentTableNumber <= tablesPerSitting
    ) {
      if (!occupiedTableNumbers.includes(currentTableNumber)) {
        availableTables.push(currentTableNumber);
        remainingTablesNeeded--;
      }
      currentTableNumber++;
    }

    if (availableTables.length === 0) {
      return res.status(400).json({
        message: "No available tables for the selected sitting and date.",
      });
    }

    const newBooking = await Booking.create({
      table: availableTables,
      numberOfPeople,
      sitting,
      firstName,
      lastName,
      email,
      phoneNumber,
      date: date,
    });

    return res.status(201).json(newBooking);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const booking = await Booking.findByIdAndDelete(bookingId);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found.",
      });
    }

    return res.status(200).json({
      message: "Booking deleted successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateBookingById = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const { numberOfPeople, sitting, email, phoneNumber, date, table } =
      req.body;

    const booking = await Booking.findById(bookingId);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found.",
      });
    }

    const tableSize = 6;
    const tablesPerSitting = 15;

    const tablesNeeded = Math.ceil(numberOfPeople / tableSize);

    // Check if the updated booking is possible
    if (sitting || date || table || numberOfPeople) {
      const {
        sitting: currentSitting,
        date: currentDate,
        table: currentTable,
      } = booking;
      const updatedSitting = sitting || currentSitting;
      const updatedDate = date || currentDate;
      const occupiedTables = await Booking.find({
        sitting: updatedSitting,
        date: updatedDate,
      });

      if (occupiedTables.length + tablesNeeded > tablesPerSitting) {
        return res.status(400).json({
          message: "No available tables for the selected sitting and date.",
        });
      }

      const occupiedTableNumbers = occupiedTables.reduce(
        (numbers, table) => numbers.concat(table.table),
        []
      );

      const availableTables = [];
      let remainingTablesNeeded = tablesNeeded;
      let currentTableNumber = 1;

      while (
        remainingTablesNeeded > 0 &&
        currentTableNumber <= tablesPerSitting
      ) {
        if (!occupiedTableNumbers.includes(currentTableNumber)) {
          availableTables.push(currentTableNumber);
          remainingTablesNeeded--;
        }
        currentTableNumber++;
      }

      if (table) {
        if (!availableTables.includes(table)) {
          return res.status(400).json({
            message: "Invalid table number. Please choose an available table.",
          });
        }
      } else {
        // Update the table to an available table if not specified in the request
        if (availableTables.length === 0) {
          return res.status(400).json({
            message: "There are no available tables on that date and sitting.",
          });
        }
        booking.table = availableTables.slice(0, tablesNeeded);
      }
    }

    booking.numberOfPeople = numberOfPeople || booking.numberOfPeople;
    booking.sitting = sitting || booking.sitting;
    booking.email = email || booking.email;
    booking.phoneNumber = phoneNumber || booking.phoneNumber;
    booking.date = date || booking.date;

    // Update the booking
    await booking.save();

    return res.status(200).json({
      message: "Booking updated successfully.",
      data: booking,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};