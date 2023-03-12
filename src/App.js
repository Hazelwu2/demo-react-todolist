import './App.css';
import axios from 'axios'
import { useState } from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';


function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([
    { id: 0, title: '爆肝趕 KryptoCamp 作業', status: false },
    { id: 1, title: '觀看 KryptoCamp 線上課程', status: false },
    { id: 2, title: '學習 Solidity 合約', status: false },
  ])
  const [completedTodo, setCompletedTodo] = useState(0)

  const test = () => { }
  const addTodo = (text) => {
    setTodos([...todos, { title: text }])
    setInput('')
    alert('新增成功')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const makeCompletedTodo = (id) => {
    // 深複製
    const newTodos = [...todos];
    newTodos[id].status = !newTodos[id].status
    setTodos(newTodos)

    console.log(newTodos[id])
  }


  return (
    <div className='App'>
      <main>
        <div class='bg-half'></div>

        <div class='container mx-auto px-4 h-100'>
          <header class='header'>
            <span>TODO LIST</span>
          </header>

          <div class='todolist__form'>
            <input
              id='todo'
              type='text'
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
              }}
              placeholder='新增待辦事項'
            />

            <div class="add-todo-btn" onClick={() => addTodo(input)}>
              <BiMessageSquareAdd />
            </div>
          </div>


          <div class='todolist'>
            <ul class='todolist__tabs'>

              <li>
                <span onClick={() => test}
                  class='all active'
                  href='#'>
                  全部
                </span>
              </li>
              <li>
                <span
                  class='no-completed' href='#'>
                  待完成
                </span>
              </li>
              <li>
                <span
                  class='completed' href='#'>
                  已完成
                </span>
              </li>
            </ul>

            <div class='todolist__table'>

              {todos && todos?.length === 0 && (
                <div>無待辦事項</div>
              )}

              <ul class='todolist__item'>
                {todos && todos?.map((todo, i) => {
                  return (
                    <li
                      key={i}
                      class={todo?.status ? 'completed' : 'no-completed'}
                    >

                      <input
                        class='todolist__input'
                        type='checkbox'
                        id={`todo-${i}`}
                        onChange={() => makeCompletedTodo(i)}
                      />
                      <label htmlFor={`todo-${i}`}>{todo?.title}</label>

                      <button
                        onClick={() => deleteTodo(i)}
                        class='delete'
                      >
                        <MdDeleteOutline />
                      </button>
                    </li>
                  )
                })}
              </ul>

              <div class='todolist__info'>
                <span>
                  <a>{completedTodo}</a>
                  個已完成項目
                </span>
                <span class='cursor-pointer' onClick='clearCompletedTodo()'>清除已完成項目</span>
              </div>
            </div>
          </div>

        </div>
      </main >
    </div >
  );
}

export default App;
