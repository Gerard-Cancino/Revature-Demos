// Var = Scope of function
// let - scope of curly braces

// Global Scope
var a = 10;
let b = 12;

function test() {
  console.log('a = ' + a + ' b = ' + b);
  a = 22;
  b = 33;
  console.log(c) // Will return undefined // hoisted before function actually runs
  if(true){
    var c = 0; // Hoisted to function level  // Gets hoisted up before function is run.  Preran the var
    let d = 100;
  }


}

const test2 = {
  
}