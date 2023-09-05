function solution(s) {
  const len = s.split('').reduce((a,c) => {
      c === '(' ? a.push(0) : a.pop();
      return a;
  }, [])

  len === 0 ? true : false
}

let x = solution("()()")