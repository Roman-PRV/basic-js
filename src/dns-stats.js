const { NotImplementedError } = require("../extensions/index.js");

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
  map = new Map();

  let domainsArr = domains.map((elem) => elem.split(".").reverse());
  domainsArr.forEach((element) => {
    for (let i = 1; i <= element.length; i++) {
      part = "." + element.slice(0, i).join(".");
      if (map.has(part)) {
        map.set(part, map.get(part) + 1);
      } else {
        map.set(part, 1);
      }
    }
  });
  return Object.fromEntries(map.entries());
}

module.exports = {
  getDNSStats,
};
