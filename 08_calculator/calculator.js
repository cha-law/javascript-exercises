const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((total, currentItem) => {
      return total + currentItem;
    });
  }
};

const multiply = function(array) {
  return array.reduce((acc, currentItem) => {
    return acc * currentItem;
  });
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  let sum = 1;
  for (let i = num; i > 0; i--) {
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
