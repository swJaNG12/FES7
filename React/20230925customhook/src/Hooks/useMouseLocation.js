import { useEffect, useState } from "react";

// 마우스의 위치를 추적하는 훅
function useMouseLocation(initVal) {
  const [mouseLocation, setMouseLocation] = useState(
    initVal || {x: null, y: null}
  );

  // dom을 이용해서 화면상의 마우스좌표를 얻어내고 
  // mouseLocation에 업데이트 해보세요
  
  // 마우스 이벤트는 브라우저 자체에 주는 경우가 많기때문에 window에 이벤트를 준다.
  // useEffect 훅은 기본적으로 
  // 마운트 이후(화면에 컴포넌트가 그려지고 난 다음)
  // 
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setMouseLocation({x:e.x, y:e.y})
    })
    // 클린업 함수, 이벤트를 붙였다가 이 이벤트가 붙은 컴폰너트가 없어졌을 떄
    // 이 이벤트도 없애고 싶을 때 이런식으로 많이 쓴다.
  }, []);

  return mouseLocation;
}

export default useMouseLocation;