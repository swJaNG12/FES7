import './TodoItem.css'
import React from 'react'

const TodoItem = ({id, isDone, createDate, content, onUpdate, onDelete}) => {
  console.log('TodoItem 업데이트')
  const onChangeCheckbox = () => {
    onUpdate(id)
  }
  const onClickDelete = () => {
    onDelete(id);
  }
  return (
    <li className="TodoItem">
      <div className='checkbox_col'> 
        <input 
          type='checkbox' 
          onChange={onChangeCheckbox}
          checked={isDone} 
        />
      </div>
      <div className='title_col'>{content}</div>
      <div className='date_col'>{new Date(createDate).toLocaleDateString()}</div>
      <div className='btn_col'>
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </li>
  );
}

export default React.memo(TodoItem);