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
	
};

const factorial = function() {
	
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
