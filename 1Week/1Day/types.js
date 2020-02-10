/*
  number 
  object
  string
  null // is an object
  undefined
  NaN // Not a number
*/

const typeCheck = (a) => {
  console.log(`a has a value of ${a} and a type of ${typeof(a)}`);
}

typeCheck('test');
typeCheck(undefined)
typeCheck(Infinity)
typeCheck(NaN)
typeCheck(typeCheck)
typeCheck([1,1,1])