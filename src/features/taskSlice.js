import { createSlice } from "@reduxjs/toolkit";

// Load tasks from localStorage if available
const loadTasksFromLocalStorage = () => {
  try {
    const serializedTasks = localStorage.getItem("tasks");
    if (serializedTasks === null) {
      return []; // Return an empty array if no tasks are found in localStorage
    }
    return JSON.parse(serializedTasks); // Parse and return tasks from localStorage
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    return []; // Return an empty array in case of error
  }
};

const initialState = {
  tasks: loadTasksFromLocalStorage(), // Initialize tasks array from localStorage
};

// Define task slice using createSlice
export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // Reducer function to add a new task
    addTask: (state, action) => {
      const newTask = action.payload; // Extract new task from action payload
      state.tasks.push(newTask); // Add new task to tasks array in state

      // Save updated tasks to localStorage after adding a new task
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    // Reducer function to delete a task
    deleteTask: (state, action) => {
      const taskId = action.payload; // Extract taskId from action payload
      state.tasks = state.tasks.filter((task) => task.id !== taskId); // Filter out task with matching ID

      // Save updated tasks to localStorage after deleting a task
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    // Reducer function to toggle task completion status
    toggleTaskCompletion: (state, action) => {
      const taskId = action.payload; // Extract taskId from action payload
      const taskToUpdate = state.tasks.find((task) => task.id === taskId); // Find task with matching ID
      if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed; // Toggle completion status of the task

        // Save updated tasks to localStorage after toggling completion status
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

// Export action creators
export const { addTask, deleteTask, toggleTaskCompletion } = taskSlice.actions;

// Export reducer function
export default taskSlice.reducer;
