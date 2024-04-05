import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <TodoTemplate>
      {/* Todo app을 만들자!!! */}
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
