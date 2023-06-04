const mongoose = require("mongoose");
const Booking = require("./models/Booking");
require('dotenv').config();

mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const tablesPerSitting = 15;
const defaultTableSize = 0;

async function seedDb() {
  try {
    await Booking.deleteMany({});

    const totalTables = tablesPerSitting * 2;

    for (let i = 0; i < totalTables; i++) {
      const tableNumber = i + 1;
      const sitting = i < tablesPerSitting ? 1 : 2;

      const newBooking = new Booking({
        table: tableNumber,
        numberOfPeople: defaultTableSize,
        sitting,
        email: "",
        date: new Date(),
      });

      await newBooking.save();
    }

    console.log("--------------------------------");
    console.log("Database seeded successfully! 🌱");
    console.log("--------------------------------");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedDb();
