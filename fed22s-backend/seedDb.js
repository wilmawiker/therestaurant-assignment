const mongoose = require('mongoose');
require('dotenv').config();

const Table = require('./models/Table');
const Timeslot = require('./models/Timeslot');

mongoose.connect(`${process.env.MONGO_CONNECTION_STRING}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedDB() {
  try {
    await Table.deleteMany({});
    await Timeslot.deleteMany({});

    const tables = [];
    for (let i = 1; i <= 15; i++) {
      tables.push({
        tableNumber: i,
        timeslots: [
          {
            timeslot: 18,
            isOccupiedBy: null,
            amountOfGuests: 0,
          },
          {
            timeslot: 21,
            isOccupiedBy: null,
            amountOfGuests: 0,
          },
        ],
      });
    }

    const savedTables = await Table.insertMany(tables);

    console.log('Seed data created successfully.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
