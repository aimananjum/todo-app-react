import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import ItemsContainer from "./components/ItemsContainer";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-item-store";
function App() {
  return (
    <TodoItemsContextProvider>
      <div className="container text-center">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <ItemsContainer />
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
