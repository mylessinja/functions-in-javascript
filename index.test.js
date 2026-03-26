function findmaximum(num1, num2) {
  if (num1 > num2) {
    return num1;


  } else if (num2 > num1) {
    return num2;
  }

  else (num1 = num2)
  return "0";
}

let max = findmaximum(5, 10);
console.log(max);
