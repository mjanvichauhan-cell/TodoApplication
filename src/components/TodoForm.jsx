import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    addTodo(text, date);
    setText("");
    setDate(new Date());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-2xl bg-white p-6 shadow-md"
    >

      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What do you need to do?"
          className="rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          showTimeSelect
          dateFormat="dd/MM/yyyy h:mm aa"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Save Todo
        </button>
      </div>
    </form>
  );
}

export default TodoForm;