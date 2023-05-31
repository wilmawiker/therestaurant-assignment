const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
  },
  timeslots: [
    {
      timeslot: {
        type: Number,
        enum: [18, 21],
        required: true,
      },
      isOccupiedBy: {
        type: String,
        default: null,
      },
      amountOfGuests: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
