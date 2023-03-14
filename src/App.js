import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  // 設定 Tab 狀態
  const [tab, setTab] = useState('all')

  // 篩選資料
  const [filterTodos, setFilterTodos] = useState([])

  const handleFilter = () => {
    switch (tab) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilterTodos(todos)
        break
    }
  }

  useEffect(() => {
    handleFilter()
  }, [tab, todos])



  return (
    <div className="App">
      <header>
        TodoList
      </header>

      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setTab={setTab}
        filterTodos={filterTodos}
      />

      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  )
}

export default App