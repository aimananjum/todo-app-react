import styles from "./ItemsContainer.module.css";
import Item from "./Item";
import { TodoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";

const ItemsContainer = () => {
  const context = useContext(TodoItemsContext);
  const todoItems = context.todoItems;
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => {
        return (
          <Item key={item.name} todoName={item.name} todoDate={item.dueDate} />
        );
      })}
    </div>
  );
};
export default ItemsContainer;
