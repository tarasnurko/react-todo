import { useState } from "react";
import Category from "../Category/Category";
import styles from "./Sidebar.module.css";

const Sidebar = ({allCategories, currentCategory, addCategory, removeCategory, changeCurrentCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddClick = (e) => {
    e.preventDefault();
    if (inputValue !== " " && inputValue !== "") addCategory(inputValue.toLowerCase());
    setInputValue('');
  }

  return (
    <div className={styles.sidebar}>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder='Category' value={inputValue} onChange={(e) => changeInputValue(e)}/>
        <button className={styles.button} onClick={(e) => handleAddClick(e)}>Add Category</button>
      </form>
      <div className={styles.categories}>
        {allCategories.map(category => (
          <Category key={category.id} currentCategory={currentCategory} category={category} removeCategory={removeCategory} changeCurrentCategory={changeCurrentCategory}/>
        ))}
      </div>
    </div>
  )
}

export default Sidebar