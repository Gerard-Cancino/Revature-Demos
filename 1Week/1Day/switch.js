const mySwitch = (x) => {
  let returnVal = '';
  switch(x){
    case 1:
      returnVal = 'number is a 1';
      break;
    case 2:
      returnVal = 'number is a 2';
      break;
    case 3:
      returnVal = 'number is a 3';
      break;
    default:
      returnVal = 'cannot find number';
      break;
  }
  return returnVal;
}
console.log(mySwitch(1))