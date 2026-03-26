function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

function isPalindrome(word) {
  const lower = word.toLowerCase();
  const reversed = lower.split("").reverse().join("");
  return lower === reversed;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100);
  return originalPrice - discount;
}

module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice
};
