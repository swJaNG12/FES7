// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter((item) => item % 2 === 0);

// filter는 return 값이 true인 것만 모아서 새로운 배열을 만든다.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(item => {
  return true;
})
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(item => {
  return false;
})
// []


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(item => {
  return item > 5;
})
// [6, 7, 8, 9]


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arr.filter(item => {
  return item % 2 !== 0;
})
// [1, 3, 5, 7, 9]

// [4,3,5,2,4]

// reduce
[10, 20, 30, 40, 50].reduce((a, c) => a + c, 0)

// includes
const arr1 = ['hello', 'world', 'hojun']
arr1.includes('world')

const arr1 = ['hello', 'world', 'hojun']
arr1.includes('leehojun')

const arr1 = ['hello', 'world', 'hojun']
arr1.includes('jun')

// join(***)
let arr = ['hello', 'world', 'hojun']
arr.join('!')

let arr = ['hello', 'world', 'hojun']
arr.join(' ')

let arr = ['010', '5044', '2903']
arr.join('-')

let arr = ['안녕하세요', '제 이름은 이호준입니다.', '제주에 살아요.']
arr.join('\n')

let arr = ['안녕하세요', '제 이름은 이호준입니다.', '제주에 살아요.']
arr.join('<br>')
console.log(arr.join('<br>')) // innerHTML로 하면 <br>이 적용됨
document.write(arr.join('<br>'))

// reverse
[10,20,30].reverse() // [30, 20, 10]



// join에서 주의사항
[010, 5044, 2903].join('') // 010은 8진법으로 8이 나옵니다. 011은 9로 나옵니다.
// 보통 이렇게 처리하기 때문에 문제가 생기지 않습니다.
['010', '5044', '2903'].join('')
// 0으로 시작하면 앞에 0이 사라집니다.
// 0다음에 숫자가 나오기 시작하면 진법으로 인식합니다.
// 2진법
// 0b100 == 4 // (b)바이너리

// 8진법
// 0o100 == 64 // (o)옥타

// 16진법
// 0x100 == 256 // (x)헥사

// 문제4
// 1부터 100까지의 숫자 중 3의 배수만 더한 값을 출력해주세요.
// 앞에서는 forEach사용했는데, 이번에는 map과 filter, reduce를 사용해주세요.
'a'.repeat(100).split('a')
Array(100).fill(0).map((_, i) => i + 1).filter(v => v % 3 === 0).reduce((a, c) => a + c, 0)