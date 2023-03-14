import React from 'react'
import { MdDeleteOutline, MdCheck } from 'react-icons/md';


const Todo = ({ text, todos, todo, setTodos }) => {
  // 刪除待辦事項
  const deleteTodo = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  }

  const completeTodo = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }

      return item
    }))
  }


  return (
    <div className='todo'>
      <li
        className={`todo-item ${todo.completed ? 'completed' : ''}`}
      >
        {text}
      </li>
      <button
        onClick={completeTodo}
        className='complete-btn edit'
      >
        <MdCheck />
      </button>

      <button
        className='delete trash-btn'
        onClick={deleteTodo}
      >
        <MdDeleteOutline />
      </button>
    </div>
  )
}

export default Todo