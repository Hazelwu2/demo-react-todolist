import { useState } from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';

export default function Todos({
  todos,
  makeCompletedTodo,
  clearCompletedTodo,
  completedTodo,
  editTodo,
  deleteTodo
}) {


  return (
    <div className='todolist__table'>

      {todos && todos?.length === 0 && (
        <div>無待辦事項</div>
      )}

      <ul className='todolist__item'>
        {todos && todos?.map((todo, i) => {
          return (
            <li
              key={i}
            // className={todo?.completed ? 'completed' : 'no-completed'}
            >

              <input
                className='todolist__input'
                type='checkbox'
                id={`todo-${i}`}
                onChange={() => makeCompletedTodo(i)}
              />
              <label htmlFor={`todo-${i}`}>
                {todo?.title}
              </label>

              <div className='todolist__btn'>
                <button
                  onClick={editTodo(i)}
                  className='edit'
                >
                  <MdEdit />
                </button>

                <button
                  onClick={deleteTodo(i)}
                  className='delete'
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      <div className='todolist__info'>
        <span>
          <span>{completedTodo}</span>
          個已完成項目
        </span>
        <span className='cursor-pointer' onClick={clearCompletedTodo}>
          清除已完成項目
        </span>
      </div>
    </div>
  )
}