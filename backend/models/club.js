const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactAgent: { type: String, required: true },
  emailAddress: { type: String, required: true },
  phone1: { type: Number, required: true },
  phone2: { type: Number, required: false }, 
  payoutMethod: {
    type: String,
    required: true,
    enum: ['PayPal', 'Zelle', 'Bank'],
  },
  paypalOrZelle: { type: String, required: false }, 
  bank: { type: String, required: false }, 
  routingNumber: { type: String, required: false }, 
  accountNumber: { type: String, required: false }, 
  accountType: {
    type: String,
    required: false,
    enum: ['Checking', 'Savings'],
  }, 
});

const Club = mongoose.model('Club', clubSchema);

module.exports = Club;
