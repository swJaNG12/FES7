function fibonachi(n) {
  if(n === 0) return 0;
  if(n === 1 || n === 2) {
      return 1;
  }
  return fibonachi(n-2) + fibonachi(n-1);
}

let input = 100;
let arr =  [];
let n = 0


while(input > 1) {
  while(fibonachi(++n) <= input) {}
  arr.push(fibonachi(n-1))
  input -= fibonachi(n-1)
  n = 0;
}