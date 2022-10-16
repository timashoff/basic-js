const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!arguments.length) return 'Unable to determine the time of year!'
  if (Object.getOwnPropertyNames(date).length || !(date instanceof Date)) throw new Error('Invalid date!')

  const season = ['winter', 'spring', 'summer', 'fall']
  const m = Math.floor((date.getMonth() + 1) / 12 * 4) % 4
  return season[m]
}

module.exports = {
  getSeason
};
