const mongoose = require('mongoose');

const timeslotSchema = new mongoose.Schema({
  tableId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table',
    required: true,
  },
  time: {
    type: String,
    enum: ['18:00', '21:00'],
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

const Timeslot = mongoose.model('Timeslot', timeslotSchema);

module.exports = Timeslot;
