import './App.css';
import axios from 'axios'
import { useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState([])
  const [completedTodo, setCompletedTodo] = useState(0)

  const test = () => { }

  return (
    <div className='App'>
      <main>
        <div class='bg-half'></div>

        <div class='container mx-auto px-4 h-100'>
          <header class='header'>
            <span>TODO LIST</span>
          </header>

          <div class='todolist__form'>
            <input id='todo' type='text' placeholder='新增待辦事項' />
            <div>+</div>
            {/* <a>
              <img src='./images/add.svg' alt='Create Todo'>
              Add
            </a> */}
          </div>


          <div class='todolist'>
            <ul class='todolist__tabs'>
              <li>
                <a onClick={() => test}
                  class='all active'
                  href='#'>
                  全部
                </a>
              </li>
              <li>
                <a onClick={() => { }}
                  class='no-completed' href='#'>
                  待完成
                </a>
              </li>
              <li>
                <a onClick={() => { }}
                  class='completed' href='#'>已完成
                </a>
              </li>
            </ul>

            <div class='todolist__table'>
              <ul class='todolist__item'>
                <li class=' no-completed'>
                  <input class='todolist__input' type='checkbox' />
                  <span>爆肝趕 KryptoCamp 作業</span>
                  <a class='delete' href='#'>
                    <i class='fa fa-x'></i>
                  </a>
                </li>


                <li class='no-completed'>
                  <input class='todolist__input' type='checkbox' />
                  <span>觀看 KryptoCamp 線上課程</span>
                  <a class='delete' href='#'>
                    <i class='fa fa-x'></i>
                  </a>
                </li>

                <li class='no-completed'>
                  <input class='todolist__input' type='checkbox' />
                  <span>學習 Solidity 合約</span>
                  <a class='delete' href='#'>
                    <i class='fa fa-x'></i>
                  </a>
                </li>
              </ul>

              <div class='todolist__info'>
                <span>
                  <a>{completedTodo}</a>
                  個已完成項目
                </span>
                <span class='cursor-pointer' onclick='clearCompletedTodo()'>清除已完成項目</span>
              </div>
            </div>
          </div>

        </div>
      </main >
    </div >
  );
}

export default App;
