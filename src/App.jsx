import React, { useEffect, useState } from "react";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(task){
    setTodos([task, ...todos]);
  }

  function deleteTodo(id) {
    const remainingTodos = todos.filter((todo) => todo.id != id);
    setTodos(remainingTodos);
  }

  function updateTodo(id, data){
    const updatedTodos=todos.map((todo) => (todo.id === id ? data : todo));
    
    setTodos(updatedTodos);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <main className="px-10 py-10 ">
      <div className="container max-w-screen-xl mx-auto px-14 py-10 bg-slate-200 shadow-lg rounded-2xl">
        <h1 className="px-10 py-4 text-4xl flex items-center justify-center">
          Todo List
        </h1>

        <AddTodo addTodo={addTodo} />

        <ul>
          {todos.map((todo, index) => (
            <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
