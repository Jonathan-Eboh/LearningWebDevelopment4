var bar = "dance"; //global scope

function foo() {//start foo function scope
  bar = 10; //from dance to 10

  var innerFoo = function() {//start innerFoo scope
    var bar = 15; //never accessed
}//end innerFoo scope

  console.log("2: " + bar); //2: What will bar be on this line?
  innerFoo(); //both bars here are 10
  console.log("3: " + bar); //3: What will bar be on this line?
}//end foo function scope

console.log("1: " + bar); //1: What will bar be on this line?
foo();//both bars here are dance--correction 4: is 10 because the function foo changes the value of the global bar
console.log("4: " + bar); //4: What will bar be on this line?


console.log(Math);
