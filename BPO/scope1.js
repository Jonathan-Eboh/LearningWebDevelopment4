var bar = 5;
console.log("1: " + bar); //1: What will bar be on this line?
//bar is 5 here
function foo() {
  var bar = 10;
  console.log("3: " + bar); //3: What will bar be on this line?
//bar is 10 here
  var innerFoo = function() {
    bar = 15;
    console.log("6: " + bar);
  }

  console.log("4: " + bar); //4: What will bar be on this line?
  //bar is 15 here--correction this foo function does not have acces to the bar within the inner scope so this bar grabs with value of bar from within the scope of foo which is 10
}

console.log("2: " + bar); //2: What will bar be on this line?
foo();//last two bars are both 5
console.log("5: " + bar); //5: What will bar be on this line?
