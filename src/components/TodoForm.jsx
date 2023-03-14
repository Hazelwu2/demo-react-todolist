import React, { useState } from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi';


export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    addTodo(input)
    setInput('')
  }

  return (
    <div className='todolist__form'>
      <input
        id='todo'
        type='text'
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        placeholder='新增待辦事項'
      />

      <div
        className="add-todo-btn"
        onClick={handleSubmit}>
        <BiMessageSquareAdd />
      </div>
    </div>
  )
}