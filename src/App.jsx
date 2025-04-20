import React, { useEffect, useState } from "react";
import TodoItem from "./components/todoitem";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTodo() {

    if(!newTask.trim()) return;

    setTodos([newTask, ...todos]);
    
    setNewTask("");
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <main className="px-10 py-10 ">
      <div className="container max-w-screen-xl mx-auto px-14 py-10 bg-slate-200 shadow-lg rounded-2xl">
        <h1 className="px-10 py-4 text-4xl text1`2 flex items-center justify-center">
          Todo List
        </h1>
        <input
          className="border w-full rounded mt-5 px-2 py-1"
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button
          onClick={addTodo}
          className="bg-blue-400 hover:bg-blue-600 text-white px-5 py-1 rounded my-1"
        >
          Add
        </button>

        <ul>
          {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
