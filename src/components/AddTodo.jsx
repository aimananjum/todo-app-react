import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdAddBox } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const AddTodo = () => {
  const todoNameEle = useRef();
  const todoDateEle = useRef();

  const { addNewItem } = useContext(TodoItemsContext);

  const handleOnClick = (event) => {
    event.preventDefault();
    let todoName = todoNameEle.current.value;
    let todoDueDate = todoDateEle.current.value;
    addNewItem(todoName, todoDueDate);
    todoNameEle.current.value = "";
    todoDateEle.current.value = "";
  };

  return (
    <form className="row my-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here..."
          ref={todoNameEle}
        ></input>
      </div>
      <div className="col-4">
        <input type="date" ref={todoDateEle}></input>
      </div>
      <div className="col-2">
        <button className="btn btn-success" onClick={handleOnClick}>
          <MdAddBox />
        </button>
      </div>
    </form>
  );
};
export default AddTodo;
