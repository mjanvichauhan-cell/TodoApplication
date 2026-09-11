import TodoItem from "./TodoItem";

function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
}) {

  if (todos.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-md">
        <p className="text-lg text-slate-400">
          No todos yet.
        </p>

        <p className="mt-1 text-sm text-slate-400">
          Add your first task above.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}

    </div>
  );
}

export default TodoList;