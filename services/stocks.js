/**
 * @file Service to deal with stocks
 */

/**
 * Return a random integer between min adn max
 *
 * @private
 * @param: {number} min - Bottom limit allowed
 * @param: {number} max - Upper limit allowed
 * @returns: Random number
 */
const _getRandomInt = (min = 0, max = 100) => (
  Math.floor(Math.random() * (max - min)) + min
);


module.exports = {
  /**
   * Fetch price of a stock by it's symbol
   *
   * @param: {string} symbol - Symbol of the stock
   * @returns: Price of the stock
   */
  fetchPrice: symbol => _getRandomInt(symbol.length * 50, symbol.length * 100)
};
