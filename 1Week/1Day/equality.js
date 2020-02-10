/*
  == will do type coercion and compare values
  === will compare the types and the values
*/

const equality = () => {
  let a = 5;
  let b = '5';
  if(a===b) return false; //always use triple
  if(a==b) return true;
}
console.log(equality());

console.log(+'test');
console.log('5');
console.log(+'5');
