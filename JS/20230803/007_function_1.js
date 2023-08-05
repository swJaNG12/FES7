function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

// 문제2: '100,000' 와 같은 숫자를 입력받아 100000 number 형태로 반환
function stringToNumber(inputString) {
  return parseInt(inputString.replaceAll(',',''))
}

// 문제3: hello 
function printAndSplit (string) {
  console.log(string);

  const splitString = string.split('');
  console.log(splitString);
}

// 문제4: 2개의 숫자를 더하고 더한 2개의 숫자를 곱하는 함수 작성
function add(num1, num2) {
  return num1 + num2;
}
function addAndSquare(num1, num2) {
  return Math.pow((add(num1, num2)), 2);
}

// 문제5: 
function quadraticEquation(x) {
  return (x ** 2) + (4 * x) - 12;
}
