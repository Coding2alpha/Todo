import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="p-4 flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 h-[100vh] ">
      <div className="flex-col ">
        <h1 className="text-4xl font-bold mb-4">Todo List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
};

export default App;
