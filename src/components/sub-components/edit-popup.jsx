import { Button, TextField } from "@mui/material";
import { useTasks } from "../../common/TasksContext";
import { useState } from "react";

function EditCard() {
  const { handleDisplay, editTask } = useTasks();
  const [editedtask, setEditedtask] = useState();
  const { taskToEdit } = useTasks();

  const handleChange = (event) => {
    setEditedtask({
      ...editedtask,
      [event.target.name]: event.target.value,
      id: taskToEdit,
    });
  };

  const handleSave = () => {
    if (taskToEdit) {
      editTask(taskToEdit, editedtask.title, editedtask.desc);
    }
  };

  return (
    <div className="backdrop">
      <div className="edit-popup">
        <h2 className="edit-popup-title">تعديل المهمة</h2>

        <div className="edit-popup-content">
          <TextField
            id="title-input"
            name="title"
            label="العنوان"
            variant="standard"
            color="secondary"
            fullWidth
            margin="normal"
            onChange={(e) => handleChange(e)}
          />

          <TextField
            id="details-input"
            name="desc"
            label="التفاصيل"
            variant="standard"
            color="secondary"
            fullWidth
            margin="normal"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="edit-popup-actions">
          <Button
            color="secondary"
            variant="contained"
            className="edit-btn"
            onClick={() => handleSave()}
          >
            تعديل
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            className="cancel-btn"
            onClick={handleDisplay}
          >
            الغاء
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditCard;
