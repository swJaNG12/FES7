import './App.css';

function App() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const sec = date.getSeconds()

  
  return (
      <div className='container'>
        <p className='year'>년 : {year}</p>
        <p>월/일 : {month}/{day}</p>
        <p>시간 : {hour}시 {minute}분 {sec}초 </p>
      </div>

  );
}

export default App;
