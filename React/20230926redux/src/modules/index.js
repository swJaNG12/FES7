// 나뉜 reducer를 합치는 곳
import goodsReducer from "./goodsCounter";
import stockReducer from "./stockCounter";
import {combineReducers} from 'redux';

// combineReducers 함수로 두 reducer를 합친다.
const rootReducer = combineReducers({
  goodsReducer,
  stockReducer
})


export default rootReducer;