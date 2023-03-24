const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  club: { type: mongoose.Schema.Types.ObjectId, ref: 'Club', required: true },
  user: { type: String, required: true }, 
  amenity: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;

