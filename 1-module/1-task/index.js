/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  let result = 1;

  if (n <= 1) {
    return result;
  }

  for (let i = n; i !== 0; i --) {
    result = i * result;
  }

  return result;
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120

