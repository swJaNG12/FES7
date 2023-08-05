let input = [
  '11',   '1 4',  '3 5',
  '0 6',  '5 7',  '3 8',
  '5 9',  '6 10', '8 11',
  '8 12', '2 13', '12 14'
]

const n = parseInt(input[0]);


let arr = []
for(let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number))
}
arr.sort((a,b) => a[1] - b[1])


let answer = [arr[0]]
let index = 0

for(let i = 1; i < arr.length; i++) {
  let next = arr.filter(el => arr[index][1] <= el[0])[0]
  index = arr.findIndex(arr => {
    return JSON.stringify(arr) === JSON.stringify(next)
  })
  answer.push(next)
}
console.log(answer)