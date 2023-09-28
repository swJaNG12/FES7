import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + action.data;
    case 'DECREASE':
      return state - action.data;
  }
}

const TestComp = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return(
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <strong>{count}</strong>
      </div>
      <div>
        <button onClick={() => dispatch({ type:'INCREASE', data: 1 })}>+</button>
        <button onClick={() => { dispatch({ type:'DECREASE', data:1 }) }}>-</button>
      </div>
    </div>
  );
}

export default TestComp;