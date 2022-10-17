const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let arr = []

  for (let i = 0; i < domains.length; i++) {
    const domens = []
    const domen = domains[i].split('.').reverse()
    let item = ''
    for (let j = 0; j < domen.length; j++) {
      item = `${item}.${domen[j]}`
      domens.push(item)
    }
    arr.push(domens)
  }

  arr = arr.reverse().flat()
  const result = {}
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]] != undefined) result[arr[i]]++
    else result[arr[i]] = 1
  }

  return result

}



module.exports = {
  getDNSStats
};
