/**
 * @file Trades of a stock
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Trades Schema
 */

const TradeSchema = new Schema({
  stock: { type: String, required: true },
  type: { type: String, enum: ['BUY', 'SELL'], required: true },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Trade', TradeSchema);
