import './App.css';
import { useState,useRef } from 'react';
import { useEffect } from 'react';

// useRef
function Counter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const conutThree = useRef(0);
  let countFour = 0;


  console.log('컴포넌트 업데이트');

  const handleCountUp = () => {
    setCount(count + 1);
    console.log('count', count);
  }

  const handleCountUpTwo = () => {
    setCountTwo(countTwo + 1);
    console.log('countTwo', countTwo);
  }

  const handleCountUpThree = () => {
    conutThree.current += 1;
    console.log('conutThree', conutThree);
  }

  const handleCountUpFour = () => {
    countFour += 1;
    console.log('countFour', countFour);
  }

  useEffect(() => {
    console.log('count 감시되고 있습니다.', count);
  }, [count]);
  
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>1</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>1</button>
      <div>{conutThree.current}</div>
      <button onClick={handleCountUpThree}>1</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>1</button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
