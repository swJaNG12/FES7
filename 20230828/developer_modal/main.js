// dom에서 Path 찾기
const path = document.querySelector('#path');

const openBtn = document.querySelector('.btn-open');

console.log(openBtn)


// path(이미지)의 전체길이 구하기, getTotalLength() 메서드
const pathLength = path.getTotalLength();

// dasharray, dash의 길이와 공백
// path.style.strokeDasharray = '100' + " " + '100'
// path.style.strokeDasharray = pathLength + " " + pathLength
// 서로 값이 같다면 path.style.strokeDasharray = `${pathLength}`도 가능
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// dash를 어디서 부터 그릴지
path.style.strokeDashoffset = pathLength
console.log(pathLength);



// 현재 스크롤의 위치
// console.log(document.documentElement.scrollTop);


// 현재 뷰포트의 크기
console.log('innerHeight',innerHeight)


// 뷰포트와 UI를 화면 전체의 크기
console.log('outerHeight',outerHeight)


console.log('scrollHeight', document.documentElement.scrollHeight)
console.log('clientHeight', document.documentElement.clientHeight)



// 스크롤 할때 마다 스크롤 위치 출력
const scrollHandler = () => {
  console.log('pathLength',pathLength);
  // 현재 body의 height가 5000px이므로 %로 바꿔서 dash의 길이를 정한다.


  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop
  console.log(scrollTop);

  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight;

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;


  // 현재 스크롤의 위치 => %로, 0 ~ 1의 값을 가진다.
  // 전체 스크롤 영역 높이에서 뷰포트 높이만큼 빼줌
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
  console.log('scrollPercentage',scrollPercentage);

  // 그려지는 길이
  const drawLength = pathLength * scrollPercentage
  console.log('drawLength',drawLength);

  // pathLength
  path.style.strokeDashoffset = pathLength - drawLength;
  

  // button opacity 조절
  openBtn.style.opacity = scrollPercentage;

  // scrollPercentage가 80이상 일때 버튼 enabled(활성화), 아닐때는 disabled(비활성화)
  if(scrollPercentage > 0.8) {
    openBtn.disabled = false;
  } else {
    openBtn.disabled = true;
  }
}
window.addEventListener('scroll', scrollHandler)