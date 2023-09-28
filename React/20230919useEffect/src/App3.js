import React from 'react'


// let geust = 0;

function Cup({geust}) {
  console.log('cup geust', geust);
  // geust += 1;
  return <h2>{geust}번 손님을 위한 컵입니다.</h2>
}

export default function App3() {
  return (
    <div>
      <Cup geust={1} />
      <Cup geust={2}/>
      <Cup geust={3}/>
      <Cup geust={4}/>
      <Cup geust={5}/>
      <Cup geust={6}/>
      <Cup geust={7}/>
    </div>
  )
}

