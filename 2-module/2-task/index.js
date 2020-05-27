/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let result = 0;
  for (const key in obj) {
    result ++;
  }
  return !result;
}
isEmpty();
