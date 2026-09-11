import { FaTrash } from "react-icons/fa";

function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
}) {

  const todoDate = new Date(todo.date);
  const today = new Date();

  const isToday =
    todoDate.getDate() === today.getDate() &&
    todoDate.getMonth() === today.getMonth() &&
    todoDate.getFullYear() === today.getFullYear();

  const formattedDate = isToday
    ? "Today"
    : todoDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

  const formattedTime = todoDate.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex items-center justify-between rounded-2xl bg-white p-5 shadow-md transition ${
        todo.completed ? "opacity-70" : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="h-5 w-5 cursor-pointer accent-blue-600"
        />
        <div>
          <h2
            className={`text-lg font-semibold text-slate-800 ${
              todo.completed
                ? "text-slate-400 line-through"
                : ""
            }`}
          >
            {todo.text}
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            📅 {formattedDate} • ⏰ {formattedTime}
          </p>
        </div>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="rounded-lg p-3 text-red-500 transition hover:bg-red-50 hover:text-red-600"
        title="Delete todo"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default TodoItem;