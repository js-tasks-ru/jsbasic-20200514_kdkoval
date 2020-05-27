/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str = '') {
  return str ? `${str[0].toUpperCase() + str.substr(1, str.length)}` : '';
}

ucFirst();
