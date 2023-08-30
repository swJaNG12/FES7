const dropTarget = document.querySelector('.drop-target');
const dragItems = document.querySelectorAll('.drag-item');

console.log(dropTarget)
console.log(dragItems)

dragItems.forEach(item => {
  item.addEventListener('dragstart', () => {
    setTimeout(() => {
      item.classList.add('dragging');
    }, 0) // 0을 주더라도 바로 실행되지는 않는다.
  })
  item.addEventListener('dragend', () => {
    item.classList.remove('dragging');
  })
})

function handleDragOver(e) {
  e.preventDefault();
  const draggingItem = dropTarget.querySelector('.dragging');
  const notdraggingItem = Array.from(dropTarget.querySelectorAll('.drag-item:not(.draggoing'))
  
  const nextItem = notdraggingItem.find((item) => {
    // clicentY : 뷰포트 내 마우스 y좌표
    // offsetTop : 뷰포트 내에서 요소까지의 y좌표
    // offsetHeight : 요소의 높이(border 포함)

    return e.clientY <= item.offsetTop + (item.offsetHeight / 2)
    // console.log('clientY',e.clientY)
    // console.log('offsetTop',item.offsetTop)
    // console.log('offsetHeight',item.offsetHeight)
  })

  dropTarget.insertBefore(draggingItem, nextItem)
}

dropTarget.addEventListener('dragover', handleDragOver);
// dropTarget.addEventListener('dragenter')