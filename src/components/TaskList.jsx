import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";
import { MdDeleteOutline } from "react-icons/md";

import { toggleTaskCompletion } from "../features/taskSlice"; // Import action creator for toggling task completion

const TaskList = () => {
  const tasks = useSelector((state) => state.task.tasks); // Get tasks array from Redux store
  const dispatch = useDispatch(); // Initialize useDispatch hook to dispatch actions

  // Handler function to delete a task
  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch deleteTask action with taskId
  };

  // Handler function to toggle task completion status
  const handleToggleCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId)); // Dispatch toggleTaskCompletion action with taskId
  };

  return (
    <ul>
      {/* Display instructional message */}
      <div className="ml-2">
        Click On Task To Mark Completed Or Not Completed
      </div>

      {/* Map over tasks array and render each task as a list item */}
      {tasks &&
        tasks.map((task, index) => (
          <li key={task.id} className="w-full">
            <div className={`flex w-full m-2`}>
              {/* Display completion status */}
              <div>
                {task.completed ? (
                  <div className="text-green-500">Done</div>
                ) : (
                  <div className="">Not Done</div>
                )}
              </div>

              {/* Task container with click event to toggle completion */}

              <div
                className={` w-full flex justify-center items-center ml-2 flex-wrap ${
                  task.completed ? "bg-green-500" : "none"
                } cursor-pointer`}
                onClick={() => handleToggleCompletion(task.id)}
              >
                <p className="mr-2">{index + 1}.</p>
                {/* Task name with conditional styling based on completion status */}

                <p
                  className={`${
                    task.completed ? "line-through" : "none"
                  } max-w-[200px] text-wrap`}
                >
                  {task.name}
                </p>
              </div>

              {/* Delete button for the task */}
              <button
                className="m-2 bg-white cursor-pointer"
                onClick={() => handleDeleteTask(task.id)}
              >
                <MdDeleteOutline />
              </button>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
