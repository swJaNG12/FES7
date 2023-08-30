

//  모달 오픈 클로즈 처리
const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const dim = document.querySelector('.dim');

// 포커스 처리

const focusableEl = modal.querySelectorAll('a, button');
const firstEl = focusableEl[0]; 
const lastEl = focusableEl[focusableEl.length-1];

console.log(focusableEl)
console.log(firstEl, lastEl)


const openModal = () => {
  modal.classList.add('active');

  // 모달이 뜬 상태에서 뒤의 배경이 스크롤 되는 현상을 방지하기 위함
  // 더 개선할 방법이 있는지 찾아보기
  document.documentElement.style.overflow = 'hidden';

  // firstEl.focus()
}
const closeModal = () => {
  modal.classList.remove('active');
  document.documentElement.style.overflow = 'auto';
}


//  포커스 처리
const handleTab = (e) => {
  // 누른 key 정보를 반환
  console.log(e.key);

  // shift 키 눌렸으면 true 안 눌렸으면 false
  console.log(e.shiftKey);

  // focus 받고 있는 요소를 반환
  const activeEl = document.activeElement;
  console.log(activeEl);



  if(e.key === 'Tab') {
    if(e.shiftKey) {
      // tab + shift 같이 눌렀을 때
      if(activeEl === firstEl) {
        e.preventDefault();
        lastEl.focus()
      }
    } else {
      // tab 만 눌렀을 때
      if(activeEl === lastEl) {
        e.preventDefault();
        firstEl.focus()
      }

    }
  }
}


btnOpen.addEventListener('click',openModal)
btnClose.addEventListener('click',closeModal)
dim.addEventListener('click', closeModal)

firstEl.addEventListener('keydown', handleTab)
lastEl.addEventListener('keydown', handleTab)


// esc 키 눌렀을 때
window.addEventListener('keydown', (e) => {
  console.log(modal.classList)
  console.log(modal.classList.contains('active'))

  if(modal.classList.contains('active') && e.key === 'Escape') {
    closeModal();
  }
  // if(modal)
})