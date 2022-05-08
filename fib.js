function fibonacci(n , total = 1) {
  if (n === 1) {
    return total;
  }
  return fibonacci(n - 1, total * n);
}

function Fib(n) {
    if(n == 1 || n == 2) {
        return 1
    }
    return Fib(n - 1) + Fib(n - 2)
}

console.log(fibonacci(5, 1))

console.log(Fib(10))