import './Header.css';
import React from 'react'

const Header = () => {
  console.log('Header 컴포넌트 업데이트')
  return (
    <header className='Header'>
      <h3>오늘은 🗓</h3>
      <h1>{new Date().toDateString()}</h1>
    </header>
  );
}

export default React.memo(Header);