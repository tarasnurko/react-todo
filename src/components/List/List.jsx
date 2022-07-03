import ListItem from "../ListItem/ListItem"
import styles from "./List.module.css"

const List = ({todos, removeTodo, toggleCheckbox, currentCategory}) => {
  return (
    <div className={styles.list}>
      {todos.map(todo => (
        (currentCategory === todo.category || currentCategory === "all") && <ListItem todo={todo} removeTodo={removeTodo} toggleCheckbox={toggleCheckbox} key={todo.id}/>
      ))}      
    </div>
  )
}

export default List