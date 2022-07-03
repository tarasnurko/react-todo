import styles from "./ListItem.module.css"

const ListItem = ({todo, removeTodo, toggleCheckbox}) => {

  return (
    <div className={styles.item}>
      <input className={styles.checkbox} checked={todo.isDone && "checked"} onChange={() => toggleCheckbox(todo.id, todo.isDone)}  type="checkbox"/>
      <button className={styles.delete} onClick={() => removeTodo(todo.id)}>&times;</button>
      <div className={styles.text}>{todo.text}</div>
    </div>
  )
}

export default ListItem