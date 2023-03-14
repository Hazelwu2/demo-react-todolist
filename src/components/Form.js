import React from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi';


const Form = ({ inputText, todos, setTodos, setInputText, setTab, }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value)
    // props.setInputText(e.target.value)
    setInputText(e.target.value)
  }

  const submitTodo = (e) => {
    // 阻止表單送出
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 9999
      }
    ])

    // 清除 Input
    setInputText('')
  }

  const handleSelect = (e) => {
    setTab(e.target.value)
  }


  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text" className='todo-input' />
      <button
        className="todo-button"
        onClick={submitTodo}
        type='submit'>
        <BiMessageSquareAdd />
      </button>

      <div className="select">
        <select onChange={handleSelect} name="todos" className="filter-todo">
          <option value="all">全部</option>
          <option value="completed">已完成</option>
          <option value="uncompleted">待完成</option>
        </select>
      </div>
    </form>
  )
}

export default Form