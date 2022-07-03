import { useState } from "react"
import List from "../List/List"
import styles from "./Main.module.css"

const Main = ({todos, currentCategory, addTodo, removeTodo, toggleCheckbox}) => {  

  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddClick = (e) => {
    e.preventDefault();
    if (inputValue !== " " && inputValue !== "") addTodo(inputValue);
    setInputValue('');
  }

  return (
    <div className={styles.main}>
      <form className={styles.inputWrapper}>
        <input className={styles.input} value={inputValue} type="text" onChange={(e) => changeInputValue(e)} placeholder='Add a new task' />
        <button className={styles.addTask} onClick={(e) => handleAddClick(e)}>Add Task</button>
      </form>
      <List todos={todos} removeTodo={removeTodo} toggleCheckbox={toggleCheckbox} currentCategory={currentCategory}/>
    </div>
  )
}

export default Main