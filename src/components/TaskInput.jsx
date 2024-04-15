import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";

const TaskInput = () => {
  const [taskName, setTaskName] = useState(""); // State for the task input field
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions

  // Handler function to add a new task
  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      const taskId = new Date().getTime().toString(); // Generate unique task ID using timestamp
      dispatch(addTask({ name: taskName, id: taskId })); // Dispatch addTask action with task object
      setTaskName(""); // Clear input field after adding task
    }
  };

  return (
    <div className="m-4 mt-10 bg-white shadow p-4 flex-col justify-center items-center w-full max-w-screen min-w-[100%]">
      {/* Task input field */}
      <div>
        <textarea
          type="text"
          placeholder="Add a new task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border-2 w-full p-2"
        />
      </div>
      {/* Button to add a new task */}
      <div>
        <button onClick={handleAddTask} className="bg-blue-600 w-full rounded-md p-1">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
