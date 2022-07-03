import React, { useState, useEffect } from 'react';
import styles from "./App.module.css";
import Main from "./components/Main/Main"
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [currentCategory, setCurrentCategory] = useState('all')

  const [allCategories, setAllCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      return JSON.parse(savedCategories);
    } else {
      return [{name: "all", id: Math.random()}];
    }
  })

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  })

  const addCategory = (categoryName) => {
    if (allCategories.findIndex(category => category.name === categoryName) === -1) {
      setAllCategories(prevCategories => [...prevCategories, {name: categoryName.trim(), id: Math.random()}])
    }
    
  }

  const removeCategory = (categoryName) => {
    setAllCategories(allCategories.filter(c => c.name !== categoryName))
    setTodos(todos.filter(t => t.category !== categoryName))
  }

  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, {category: currentCategory, text, isDone: false, id: Math.random() }])
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(t => t.id !== todoId))
  }


  const changeCurrentCategory = (categoryName) => {
    setCurrentCategory(categoryName);
  }

  const toggleCheckbox = (id, isDone) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id && isDone) {
        todo.isDone = false;
      }
      else if (todo.id === id && !isDone) {
        todo.isDone = true
      }
      return todo;
    }))
  }

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(allCategories))
  }, [allCategories])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])



  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>React ToDo List</h1>
        <div className={styles.content}>
          <Sidebar 
            allCategories={allCategories}
            currentCategory={currentCategory}
            addCategory={addCategory}
            removeCategory={removeCategory}
            changeCurrentCategory={changeCurrentCategory}
          />
          <Main 
            todos={todos}
            currentCategory={currentCategory}
            addTodo={addTodo} 
            removeTodo={removeTodo}
            toggleCheckbox={toggleCheckbox}
          />
        </div>
      </div>
    </div>
    );
}

export default App;
