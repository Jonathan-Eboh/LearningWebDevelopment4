/**********************************************************
Write a function factorial(n) that returns the factorial
of the number n. For example, the factorial of 5 is
5 * 4 * 3 * 2 * 1 = 120.

Examples:
> factorial(1);
1

> factorial(4);
24

> factorial(5);
120

> factorial(10);
3628800
**********************************************************/


// we can use recursion for this.

function factorialRecursive(n) {
    if (n === 1 || n === 0) {
        return 1
    }else {
        return n * factorialRecursive(n - 1) ;
    }

}

//Non recursively
function factorial(n) {
  // your code here...
  if (n === 1 || n === 0) {
      return 1;
  }else {
      let product = 1;
      for (var i = 1; i <= n; i++) { //needs to start at 1 because if starts at zero then it will just always equal zero
          product *= i;
      }
      return product;
  }
}

console.log("without recurision");

console.log(factorial(1));
//1

console.log(factorial(4));
//24

console.log(factorial(5));
//120

console.log(factorial(10));
//3628800


console.log("Using recurision");
console.log(factorialRecursive(1));
//1

console.log(factorialRecursive(4));
//24

console.log(factorialRecursive(5));
//120

console.log(factorialRecursive(10));
//3628800
