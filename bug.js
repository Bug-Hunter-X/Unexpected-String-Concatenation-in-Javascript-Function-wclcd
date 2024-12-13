function foo(a, b) {
  return a + b;
}

function bar() {
  return foo(1, '2');
}

console.log(bar()); // Output: 12