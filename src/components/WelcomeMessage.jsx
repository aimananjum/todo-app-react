import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-item-store";
import { useContext } from "react";

function WelcomeMessage() {
  const context = useContext(TodoItemsContext);
  const todoItems = context.todoItems;
  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
}

export default WelcomeMessage;
