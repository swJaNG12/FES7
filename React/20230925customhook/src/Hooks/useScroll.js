import { useEffect, useState } from "react";

// 사용자의 스크롤이 바닥에 닿았는지 아닌지를 체크하는 함수
function useScroll() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // 내 코드
      // console.log('1',window.scrollY + window.innerHeight)
      // console.log('2',document.body.clientHeight)

      // const currentViewPortHeight = window.innerHeight
      // const currentScrollY = window.scrollY;
      // const clientHeight = document.body.clientHeight;

      // if(currentViewPortHeight + currentScrollY -3 === clientHeight) {
      //   setIsBottom(true);
      // }

      // 둘다 스크롤의 현재 위치를 반환한다.-------
      // console.log(document.documentElement.scrollTop)
      // console.log(window.scrollY)
      // 현재보여지는 viewport 높이
      // console.log(window.innerHeight)
      // //현재문서의 전체높이
      // console.log(document.body.clientHeight)
      // ------------------------------------

      //====================================================================================
      // 강의 코드========================================================================
      // innerHeight : 뷰포트의 높이    

      // documentElement : document의 최상위 요소, 보통 HTML요소(경우에 따라 바뀔수 있다.)
      // scrollTop: 타켓요소가 화면 상단으로부터 스크롤된 길이
      // document.documentElement.scrollTop

      // offsetHeight : 컨텐츠의 총 높이, 페이지의 전체 높이를 의미
      // document.documentElement.offsetHeight

      // 뷰포트 높이 + 스크롤의 값 >= 화면 전체의 높이
      setIsBottom(window.innerHeight + document.documentElement.scrollTop +10 >= document.documentElement.offsetHeight)

      console.log(isBottom)
      
    })
  },[]);

  return isBottom
}

export default useScroll;