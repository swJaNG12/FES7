import React from 'react'
import { useState } from 'react'
import './Main.css'

export default function Main({ setModalShow }) {

  const [filed, setFiled] = useState('');
  const [time, setTime] = useState(0);
  const [day, setDay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDay(Math.ceil(10000 / parseInt(time)));
  }

  return (
    <main>

      <form className="cont-input" onSubmit={handleSubmit}>
        <p className="txt-wannabe">
          나는 
          <input 
            value={filed} 
            type="text" 
            placeholder="프로그래밍" 
            onChange={(e) => setFiled(e.target.value)} 
          /> 
          전문가가 될것이다.
        </p>
        <p className="txt-time">
          그래서 앞으로 매일 하루에 
          <input 
            value={time} 
            type="number" 
            placeholder="5" 
            onChange={(e) => setTime(e.target.value)} 
          /> 
          시간씩 훈련할 것이다.
        </p>
        <button className="btn-exc" type="submit">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
      </form>

     {day && <section className="cont-result">
        <h2 className="a11y">결과 학인</h2>
        <p className="txt-wannabe">
          당신은 <strong>{filed}</strong> 전문가가 되기 위해서 <br /> 
          대략 <strong>{day}</strong>일 이상 훈련하셔야 합니다.
        </p>
        <button className="btn-go" onClick={() => setModalShow(true)}>흔련하러가기 GO!GO!</button>
        <button className="btn-share">공유하기</button>
      </section>}

    </main>
  )
}
