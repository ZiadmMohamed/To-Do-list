import { Button, TextField } from "@mui/material";
import ColorToggleButton from "./sub-components/categories";
import Task from "./task";
import { useState } from "react";
import { useTasks } from "../common/TasksContext";

function Card() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { tasks, addTask } = useTasks();

  const displayTasks =
    tasks.length === 0 ? (
      <h1 style={{ margin: "100px" }}>لا يوجد مهام</h1>
    ) : (
      tasks.map((task) => (
        <Task key={task.id} id={task.id} title={task.title} desc={task.desc} />
      ))
    );

  const handleAddTask = () => {
    addTask(newTaskTitle);
    setNewTaskTitle("");
  };

  return (
    <div className="card">

      {/* Header */}
      <h1 style={{ fontSize: "45px" }}>مها مي</h1>
      <hr />
      <ColorToggleButton />
      
{/* Tasks */}
      {displayTasks}

{/* Add Task */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Button
          style={{ width: "34%", height: "40px", marginRight: "10px" }}
          color="secondary"
          variant="contained"
          onClick={handleAddTask}
          disabled={!newTaskTitle.trim()}
        >
          اضافه
        </Button>

        <TextField
          size="small"
          id="outlined-basic"
          label="عنوان المهمه"
          variant="outlined"
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        />
      </div>
    
    </div>
  );
}

export default Card;
