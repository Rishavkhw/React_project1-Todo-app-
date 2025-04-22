import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [text, setText] = useState(todo.name);
  const [isEditing, setIsEditing]=useState(false);

  function saveEdit() {
    updateTodo(todo.id, { ...todo, name: text.trim() });
    setIsEditing(false);
  }

  return (
    <div
      className="bg-white my-1 rounded px-2 py-1 flex items-center justify-between gap-3
    "
    >
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={() =>
          updateTodo(todo.id, { ...todo, isComplete: !todo.isComplete })
        }
      />
      <input
        type="text"
        value={text}
        disabled={!isEditing}
        className={`${
          todo.isComplete ? "line-through opacity-50" : ""
        }w-full px-2 border-slate-300 border rounded
      `}
        onKeyDown={(e) => e.key == "Enter" && saveEdit()}
        onChange={(e) => setText(e.target.value)}
      />
       <button
        onClick={() => setIsEditing(true)}
        className="bg-blue-200 px-2 py-1 shadow hover:bg-blue-400 rounded"
      >
        Edits
      </button>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-200 px-2 py-1 shadow hover:bg-red-400 rounded"
      >
        X
      </button>
    </div>
  );
}

export default TodoItem;
