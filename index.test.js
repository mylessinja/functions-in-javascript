function findmaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  }

  return num1; // equal case
}

let max = findmaximum(5, 10);
console.log(max);

module.exports = { findmaximum };
