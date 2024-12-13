function foo(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

function bar() {
  return foo(1, 2);
}

console.log(bar()); // Output: 3

function foo_coerce(a, b) {
  return Number(a) + Number(b);
}

function bar_coerce() {
  return foo_coerce(1, '2');
}
console.log(bar_coerce()); //Output: 3