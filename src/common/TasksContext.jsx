/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Create a context for tasks
const TasksContext = createContext();

export const useTasks = () => useContext(TasksContext);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const [display, setdisplay] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState();

  function handleDisplay() {
    setdisplay(!display);
  }

  const addTask = (title) => {
    setTasks([...tasks, { id: tasks.length + 1, title }]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const editTask = (id, title, desc) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { id, title: title || task.title, desc } : task
      )
    );

    setTaskToEdit(null);
    handleDisplay();
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        display,
        taskToEdit,
        addTask,
        deleteTask,
        handleDisplay,
        editTask,
        setTaskToEdit,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
