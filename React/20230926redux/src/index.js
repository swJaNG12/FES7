import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import rootReducer from './modules';

// 컴포넌트들이 store에 접근하게 할 수 있게 하는 객체
import {Provider} from 'react-redux';

const store = createStore(rootReducer);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
// Provider를 통해 APP 컴포넌트 안의 모든 컴포넌트가 store에 접근할 수 있도록 합니다.
// 안에있는 모든 자식 컴포넌트들이 store에 접근할 수 있다..
root.render(
    
    <Provider store={store}>
        <App />
    </Provider>
);










// 바닐라js redux========== 밑에 코드 먼저 복습하자!@!@!!@!@!@!@!@!@!@!!@1
// import { createStore } from 'redux';


// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const number = document.getElementById('number');
// const quantity = document.getElementById('quantity');
// const totalPrice = document.getElementById('total');

// const PRICE = 17500;

// const countReducer = (state = 0, action) => {
//     switch(action.type) {
//         case 'ADD':
//             return state + 1;
//         case 'SUBSTRACT':
//             return state - 1;
//         default:
//             return state;
//     }
// }

// const store = createStore(countReducer);

// let count = 0;

// // const updateResult = (c) => {
// //     number.textContent = count;
// //     quantity.textContent = c;
// //     totalPrice.textContent = c * PRICE; 
// // }

// const addNubmer = () => {
//     // count++;
//     // minus.disabled = false
//     // updateResult(count)
//     store.dispatch({type: 'ADD'})
// }

// const substractNumber = () => {
// //     count--;
// //     plus.disabled = false;
// //     updateResult(count);
//        store.dispatch({type: 'SUBSTRACT'})
// }

// // number.textContent = count;
// // updateResult(count);

// // render 함수
// const handleWrite = () => {
//     number.textContent = store.getState();
//     quantity.textContent = store.getState();
//     totalPrice.textContent = store.getState() * PRICE;
// }
// store.subscribe(handleWrite)

// plus.addEventListener('click', addNubmer);
// minus.addEventListener('click', substractNumber)