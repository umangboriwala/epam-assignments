function zero(x) {
  return calc(0, x);
}
function one(x) {
  return calc(0, x);
}
function two(x) {
  return calc(2, x);
}
function three(x) {
  return calc(3, x);
}
function four(x) {
  return calc(4, x);
}
function five(x) {
  return calc(5, x);
}
function six(x) {
  return calc(6, x);
}
function seven(x) {
  return calc(7, x);
}
function eight(x) {
  return calc(8, x);
}
function nine(x) {
  return calc(9, x);
}

function plus(y) {
  return function(result){
    return result + y;
  }
}
function minus(y) {
  return function(result){
    return result - y;
  }
}
function times(y) {
  return function(result){
    return result * y;
  }
}
function dividedBy(y) {
  return function(result){
    return result / y;
  }
}

function calc(n,x){
   if(x === undefined)
   {
      return n;
   }
   else{
     return x(n);
   }
}

