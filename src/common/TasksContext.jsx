/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Create a context for tasks
const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
 
  const [editDisplayed, setEditDisplayed] = useState(false);
  const [deleteDisplayed, setDeleteDisplayed] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [popupDisplayed, setPopupDisplayed] = useState(false);
  const [alignment, setAlignment] = useState("all");

  const handleChange = (newAlignment) => {
    setAlignment(newAlignment);
  };

  const showPopup = () => {
    setPopupDisplayed(true);
    setTimeout(() => {
      setPopupDisplayed(false);
    }, 2000);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
// Display Functions
  function displayEditTask() {
    setEditDisplayed((pre) => !pre);
  }

  function displayDeleteTask() {
    setDeleteDisplayed((pre) => !pre);
  }
// Display Functions

// Main Functions
  const addTask = (title) => {
    setTasks([...tasks, { id: uuidv4(), title, done: false }]);
  };

  const deleteTask = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskToEdit));

    setTaskToEdit(null);
    displayDeleteTask();
  };

  const editTask = (id, title, desc) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { id, title: title || task.title, desc } : task
      )
    );

    setTaskToEdit(null);
    displayEditTask();
  };

  const toggleDone = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };
// Main Functions

  return (
    <TasksContext.Provider
      value={{
        tasks,
        editDisplayed,
        deleteDisplayed,
        taskToEdit,
        popupDisplayed,
        alignment,
        addTask,
        deleteTask,
        displayEditTask,
        displayDeleteTask,
        editTask,
        setTaskToEdit,
        toggleDone,
        showPopup,
        handleChange,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
