/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
const salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};
function sumSalary(dataEmployees) {
  let result = 0;
  for (const key in dataEmployees) {
    if (typeof salaries[key] === 'number') {
      result += salaries[key];
    }
  }
  return result;
}

sumSalary(salaries);


