import styles from "./Category.module.css"

const Category = ({category, currentCategory, removeCategory, changeCurrentCategory}) => {

  const handleClick = (e) => {
    e.preventDefault();
    removeCategory(category.name)
  }

  const handleCategory = (e) => {
    e.preventDefault();
    if (currentCategory !== category.name) {
      changeCurrentCategory(category.name)
    }
  }

  return (
    <div className={styles.wrapper}>
      <button className={currentCategory === category.name ? `${styles.button} ${styles.active}` : styles.button} onClick={(e) => handleCategory(e)}>{category.name}</button>
      {category.name !== 'all' && 
        <button className={styles.delete} onClick={(e) => handleClick(e)}>&times;</button>
      }
    </div>
  )
}

export default Category