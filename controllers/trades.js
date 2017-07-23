/**
 * @file Trades Controller
 */


const _ = require('underscore');
const Stocks = require('../services/stocks');
const Trade = require('../models/trade');

const findOptions = '-__v';

module.exports = {

  /**
   * Creates a new trade
   */
  create: (req, res, next) => {
    req.obj.price = Stocks.fetchPrice(req.obj.stock);
    const trade = new Trade(req.obj);
    req.data.trade = trade;
    trade.save(next);
  },

  /**
   * Return a trade by it's id
   */
  get: (req, res, next) => {
    Trade.findById(req.params.id, findOptions, (err, data) => {
      req.data.trade = data;
      next(err);
    });
  },

  /**
   * Return the Trades grouped by stock
   */
  fetchPortfolio: (req, res, next) => {
    Trade.find({}, findOptions, (err, data) => {
      req.data.portfolio = _.groupBy(data, 'stock');
      next(err);
    });
  },

  /**
   * Update a trade by it's id
   */
  update: (req, res, next) => {
    Trade.update(req.params.id, req.obj, next);
  },

  /**
   * Delete a trade by it's id
   */
  delete: (req, res, next) => {
    Trade.deleteOne({ _id: req.params.id }, next);
  }
};
