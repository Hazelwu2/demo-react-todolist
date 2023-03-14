import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

// Component
import TodoForm from './components/TodoForm'
import TodoFilter from './components/TodoFilter'
import Todos from './components/Todos'


function App() {
  const [tab, setTab] = useState('all')
  const [todos, setTodos] = useState([
    { title: '爆肝趕 KryptoCamp 作業', completed: false },
    { title: '觀看 KryptoCamp 線上課程', completed: false },
    { title: '學習 Solidity 合約', completed: false },
  ])
  const [completedTodo, setCompletedTodo] = useState(0)
  const [filteredTodos, setFilteredTodos] = useState(0)

  // 新增待辦事項
  const addTodo = (text) => {
    setTodos([...todos, {
      title: text,
      completed: false
    }])

    alert('新增成功')
  }

  // 刪除待辦事項
  const deleteTodo = (id) => {
    // setTodos(todos.filter(todo => todo.id !== id))
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

  // useEffect(() => {
  //   initTodo()
  // }, [todos, tab])


  useEffect(() => {
    getTodosInStorage()
  }, [])


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

            <Todos
              todos={todos}
              makeCompletedTodo={makeCompletedTodo}
              clearCompletedTodo={clearCompletedTodo}
              editTodo={editTodo}
              completedTodo={completedTodo}
              deleteTodo={deleteTodo}
            />
          </div>

        </div>
      </main >
    </div >
  );
}

export default App;
