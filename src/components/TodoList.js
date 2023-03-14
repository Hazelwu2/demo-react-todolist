import React from 'react'
import { MdDeleteOutline, MdEdit } from 'react-icons/md';
import Todo from './Todo'

const TodoList = ({ todos, setTodos, filterTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterTodos.map((todo, i) => (
          <Todo
            key={todo.id}
            todos={todos}
            text={todo.text}
            todo={todo}
            id={todo.id}
            setTodos={setTodos} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList