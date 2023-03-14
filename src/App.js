import './App.css';
import axios from 'axios'
import { useState, useMemo, useEffect } from 'react'
import { BiMessageSquareAdd } from 'react-icons/bi';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';
// Component
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'


function App() {
  const [input, setInput] = useState('')
  const [tab, setTab] = useState('all')
  const [todos, setTodos] = useState([
    { title: '爆肝趕 KryptoCamp 作業', completed: false },
    { title: '觀看 KryptoCamp 線上課程', completed: false },
    { title: '學習 Solidity 合約', completed: false },
  ])
  const [completedTodo, setCompletedTodo] = useState(0)
  const [filteredTodos, setFilteredTodos] = useState(0)

  const addTodo = (text) => {
    setTodos([...todos, {
      title: text,
      completed: false
    }])

    setInput('')
    alert('新增成功')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  const makeCompletedTodo = (id) => {
    // 深複製
    const newTodos = [...todos];
    newTodos[id].completed = !newTodos[id].completed
    setTodos(newTodos)

    setCompletedTodo([...todos].filter(item => item.completed).length)
  }

  // 清除所有 Todo
  const clearCompletedTodo = () => {
    setTodos([...todos].filter(item => !item.completed))
  }

  const editTodo = (id, title) => {
    const newTodos = [...todos]
    newTodos[id].title = title
    setTodos(newTodos)
  }

  const saveTodosInStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getTodosInStorage = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let tempLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(tempLocal)
    }
  }

  const initTodo = () => {
    switch (tab) {
      case 'completed':
        console.log('全部')
        setFilteredTodos(todos.filter(todo => todo.completed))
        break
      case 'uncompleted':
        console.log('待完成')
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }

    console.log(todos.filter(todo => todo.completed === false))
  }

  useEffect(() => {
    initTodo()
  }, [todos, tab])


  useEffect(() => {
    getTodosInStorage()
  }, [])

  useEffect(() => {
    todos.forEach(item => console.log(item))
  }, [todos])

  return (
    <div className='App'>
      <main>
        <div className='bg-half'></div>

        <div className='container mx-auto px-4 h-100'>
          <header className='header'>
            <span>TODO LIST</span>
          </header>

          <TodoForm addTodo={addTodo} />


          <div className='todolist'>

            <TodoFilter setTab={setTab} />

            <div className='todolist__table'>

              {filteredTodos && filteredTodos?.length === 0 && (
                <div>無待辦事項</div>
              )}

              <ul className='todolist__item'>
                {filteredTodos && filteredTodos?.map((todo, i) => {
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
                      <label htmlFor={`todo-${i}`}>{todo?.title}</label>

                      <div className='todolist__btn'>
                        <button
                          onClick={() => editTodo(i)}
                          className='delete'
                        >
                          <MdEdit />
                        </button>

                        <button
                          onClick={() => deleteTodo(i)}
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
          </div>

        </div>
      </main >
    </div >
  );
}

export default App;
