import { Button, Grid2, TextField } from "@mui/material";
import ColorToggleButton from "./sub-components/categories";
import Task from "./task";
import { useState } from "react";
import { useTasks } from "../common/TasksContext";

function Card() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const { tasks, addTask, showPopup, alignment } = useTasks();

  const renderTasks = () => {
    if (tasks.length === 0) {
      return <h1 style={{ margin: "100px" }}>لا يوجد مهام</h1>;
    }

    if (alignment === "done") {
      return tasks
        .filter((task) => task.done)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            desc={task.desc}
          />
        ));
    } else if (alignment === "not done") {
      return tasks
        .filter((task) => !task.done)
        .map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            desc={task.desc}
          />
        ));
    }

    return tasks.map((task) => (
      <Task key={task.id} id={task.id} title={task.title} desc={task.desc} />
    ));
  };

  const handleAddTask = () => {
    addTask(newTaskTitle);
    setNewTaskTitle("");
    showPopup();
  };

  return (
    <div className="card" style={{ maxHeight: "80vh", overflowY: "auto" }}>
      {/* Header */}
      <h1 style={{ fontSize: "45px" }}>مها مي</h1>
      <hr />
      <ColorToggleButton />

      {/* Tasks */}
      {renderTasks()}

      {/* Add Task */}
      <Grid2 container>
        <Grid2 size={4}>
          <Button
            style={{ width: "100%", height: "40px", marginRight: "10px" }}
            color="secondary"
            variant="contained"
            onClick={handleAddTask}
            disabled={!newTaskTitle.trim()}
          >
            اضافه
          </Button>{" "}
        </Grid2>

        <Grid2 size={8}>
          <TextField
            size="small"
            id="outlined-basic"
            label="عنوان المهمه"
            variant="outlined"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />{" "}
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Card;
