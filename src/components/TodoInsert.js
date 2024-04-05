import { MdAdd } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할일을 입력해라" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
