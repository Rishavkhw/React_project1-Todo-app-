import React,{useState} from "react";

function AddTodo({addTodo}) {
  const [newTask, setNewTask] = useState("");

    function createNewTask() {
      if (!newTask.trim()) return;
      const task={
        id:Date.now(),
        name: newTask,
        isComplete:false,
      }
      addTodo(task);
      setNewTask("");
    }


  return (
    <div className="my-5 flex items-center justify-between gap-2">
      <input
        className="border w-full rounded mt-5 px-2 py-1"
        type="text"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      
      <button
        onClick={createNewTask}
        className="bg-blue-400 hover:bg-blue-600 text-white px-8 py-1 mt-5 rounded"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
