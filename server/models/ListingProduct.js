// models/ListingProduct.js

const mongoose = require('mongoose');

const listingProductSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  produce: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  quantityType: {
    type: String,
    enum: ['kilogram', 'gram', 'quintal'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
  },
});

const ListingProduct = mongoose.model('ListingProduct', listingProductSchema);

module.exports = ListingProduct;
