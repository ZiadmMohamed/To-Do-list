/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function displayEditTask() {
    setEditDisplayed((pre) => !pre);
  }

  function displayDeleteTask() {
    setDeleteDisplayed((pre) => !pre);
  }

  const addTask = (title) => {
    setTasks([...tasks, { id: tasks.length + 1, title, done: false }]);
  };

  const deleteTask = () => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToEdit)
    );

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

  return (
    <TasksContext.Provider
      value={{
        tasks,
        editDisplayed,
        deleteDisplayed,
        taskToEdit,
        addTask,
        deleteTask,
        displayEditTask,
        displayDeleteTask,
        editTask,
        setTaskToEdit,
        toggleDone,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
