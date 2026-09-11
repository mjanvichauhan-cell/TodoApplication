import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, date) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      date: date.toISOString(),
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    toast.success("Todo added successfully!");
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );

    toast.info("Todo status updated!");
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
    toast.success("Todo deleted!");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-3xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800">
            My Todo App
          </h1>

          <p className="mt-2 text-slate-500">
            Organize your tasks and stay productive
          </p>
        </div>

        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </div>
  );
}

export default App;