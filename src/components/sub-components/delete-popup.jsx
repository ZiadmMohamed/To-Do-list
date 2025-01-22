import { Button } from "@mui/material";
import { useTasks } from "../../common/TasksContext";

function DeletePopup() {
  const { deleteTask, displayDeleteTask } = useTasks();

  const handleDelete = () => {
    deleteTask();
  };
  const handleCancle = () => {
    displayDeleteTask();
  };

  return (
    <div className="backdrop">
      <div className="edit-popup" style={{ textAlign: "right" }}>
        <h2> هل انت متئكد من رغبتك في حذف المهمة ؟</h2>

        <p style={{ color: "gray" }}>
          لا يمكن التراجع عن الحذف في حال اختيار زر :(حذف)
        </p>

        <div style={{ display: "flex" }}>
          <Button color="secondary" variant="text" onClick={handleDelete}>
            حذف
          </Button>
          <Button color="secondary" variant="text" onClick={handleCancle}>
            الغاء
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
