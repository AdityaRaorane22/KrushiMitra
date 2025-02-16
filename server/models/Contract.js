const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  buyer: {
    type: String,
    required: true
  },
  commodity: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  contractStartDate: {
    type: Date,
    required: true
  },
  contractEndDate: {
    type: Date,
    required: true
  },
  stage: {
    type: String,
    enum: ['1', '2', '3'],
    required: true
  },
  stage1Name: {
    type: String
  },
  stage2Name: {
    type: String
  },
  stage3Name: {
    type: String
  },
  clauses: {
    type: String,
    required: true
  }
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;
