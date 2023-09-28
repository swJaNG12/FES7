// 무한 스크롤
import React, { useEffect, useState } from 'react'
import ImageList from './components/app2components/ImageList'
import Loading from './components/app2components/Loading';
import useScroll from './Hooks/useScroll';

export default function App2() {
 
  const [imageList, setImageList] = useState([]);

  // api에 전달할 페이지 값을 관리합니다.
  const [pageToFetch, setPageToFetch] = useState(1);
  const isBottom = useScroll();

  // Loading 컴포넌트 렌더링 조건 상태, 로딩중인 상태를 관리
  const [isLoading, setIsLoading] = useState(false);

  // 스크롤이 끝까지 이동했을 경우 데이터의 페이지를 하나 올립니다.
  useEffect(() => {

    if(isBottom) {
      // 서로 같다. 차이점 알아보기
      // setPageToFetch(pageToFetch + 1)
      setPageToFetch((prevPage) => {
        return prevPage + 1
      })
    }

  }, [isBottom])


  // ajax로 이미지 데이터 통신
  async function fetchImagesByPage() {
    setIsLoading(true)
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${pageToFetch}&limit=6`);
      if(!response.ok) {
        throw new Error('HTTP ERROR!!!! 네트워크에 문제가 발생했습니다!!', response.status);
      }

      const data = await response.json();

      // setImageList([...imageList, ...data])
      setImageList((prevDatas) => {
        return [...prevDatas, ...data]
      })
      setIsLoading(false)

    } catch (error) {
      console.error(error);
    }
  }

  // 컴포넌트가 마운트 되면 이미지데이터 불러오기
  useEffect(() => {
    fetchImagesByPage();
  }, [pageToFetch]);


  return (
    <>
      <ImageList imageList={imageList} />
      { isLoading && <Loading /> }
    </>
  )
}
