import { useCallback } from 'react';
import { useRef } from 'react';
import { useReducer } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: '공부하기',
    createDate: new Date().getTime()
  },
  {
    id: 1,
    isDone: false,
    content: '빨래 널기',
    createDate: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    createDate: new Date().getTime()
  },
]

const reducer = (state, action) => {
  switch(action.type) {
    case 'CREATE':
      return [action.newItem, ...state];
    case 'UPDATE':
      return state.map(el => el.id === action.targetId ? {...el, isDone: !el.isDone} : el);
    case 'DELETE':
      return state.filter(el => {
        return el.id !== action.targetId;
      });
    default:
      return state;
  }
}

function App() {
  const idRef = useRef(3);
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime()
      }
    })
    idRef.current++;
  }
  const onUpdate = useCallback(targetId => {
    dispatch({
      type: 'UPDATE',
      targetId
    })
  }, []);
  const onDelete = useCallback(targetId => {
    dispatch({
      type: 'DELETE',
      targetId
    })
  }, []);

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
