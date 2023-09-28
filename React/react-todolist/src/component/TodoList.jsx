import { useState, useMemo } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'


const TodoList = ({todo ,onUpdate, onDelete}) => {
  console.log('TodoList 업데이트')
  const [search, setSearch] = useState('');
  const onChangeSearch = e => {
    setSearch(e.target.value);
  }
  const getSearchResult = () => {
    return search === '' 
    ? todo 
    : todo.filter(el => el.content.toLowerCase().includes(search.toLowerCase()));
  }

  const analyzeTodo = useMemo(() => {
    const total = todo.length;
    const doneTodo = todo.filter(el => el.isDon).length;
    const notDoneTodo = total - doneTodo;
    return {
      total,
      doneTodo,
      notDoneTodo
    }
  }, [todo])

  const {total, doneTodo, notDoneTodo} = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>Todo List 🍀</h4>
      <div>
        <p>총개수 : {total}</p>
        <p>완료된 할 일 : {doneTodo}</p>
        <p>아직 완료하지 못한 할 일 : {notDoneTodo}</p>
      </div>
      <input 
        className='searchbar' 
        placeholder='검색어를 입력하세요' 
        value={search}
        onChange={onChangeSearch}
      />
      <ul className='list-wrapper'>
        {getSearchResult().map(el => {
          return <TodoItem {...el} key={el.id} onUpdate={onUpdate} onDelete={onDelete} />
        })}
      </ul>
    </div>
  );
}

export default TodoList;