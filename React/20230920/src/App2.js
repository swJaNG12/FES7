import React from 'react'
import { useMemo } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function App2() {

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [userInfo, setUserInfo] = useState([]);


  const inputName = useRef(null);
  const inputId = useRef(null);

  const handelInputName = (e) => {
    setName(e.target.value);
    console.log('렌더링 - 1');
  }
  const handleInputId = (e) => {
    setId(e.target.value);
    console.log('렌더링 - 2');
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    inputName.current.value = '';
    inputId.current.value = '';
    inputName.current.focus();

    const newInfo = [...userInfo, {name, id}];
    setUserInfo(newInfo);

    console.log('렌더링 - 3');
  }

  const getNum = (list) => {
    console.log('렌더링');
    return list.length;
  }
  // userInfo 값이 업데이트 될때에만 getNum이 실행되도록 만들었다.
  const itemLength = useMemo(() => {
    return getNum(userInfo)
  }, [userInfo])


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='이름을 입력해주세요' onChange={handelInputName} ref={inputName} />
        <input type='text' placeholder='ID를 입력해주세요' onChange={handleInputId} ref={inputId} />
        <button type='submit'>회원명부 작성</button>
      </form>
      <ul>
        {userInfo.map((value, idx) => {
          return (
            <li key={idx}>
              <h3>이름 : { value.name }</h3>
              <strong>아이디 : { value.id }</strong>
           </li>
          )
        })}
      </ul>
      <span>현재 회원 수 : {itemLength}</span>
    </>
  )
}
