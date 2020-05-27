/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str = '') {
  const string = str.toUpperCase();
  return string.includes("1xBet".toUpperCase()) || string.includes("xxx".toUpperCase());
}

checkSpam();

