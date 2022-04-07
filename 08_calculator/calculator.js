const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
	return a.reduce((valorTotal,valorAtual) => valorTotal + valorAtual,0);
};

const multiply = function(a) {
  return a.reduce((valorTotal,valorAtual) => valorTotal * valorAtual);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  } else {
    const numbers = [];
    for (let i = 1 ; i <= a ; i++) {
      numbers.push(i);
    };
    return numbers.reduce((valorTotal,valorAtual) => valorTotal * valorAtual);
  };
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
