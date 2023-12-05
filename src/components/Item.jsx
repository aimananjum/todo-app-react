import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

const Item = ({ todoName, todoDate }) => {
  const handleOnClick = (todoName1) => {
    deleteItem(todoName1);
  };
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="row my-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={() => handleOnClick(todoName)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </div>
  );
};
export default Item;
