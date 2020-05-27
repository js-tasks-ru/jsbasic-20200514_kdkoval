/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str= "", maxlength) {
  const STR_LENGTH = 19;

  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0, STR_LENGTH) + "…";
}
truncate();
