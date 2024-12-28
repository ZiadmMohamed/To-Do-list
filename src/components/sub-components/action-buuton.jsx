/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import Done from "@mui/icons-material/Done";
import { useTasks } from "../../common/TasksContext";

export default function FloatingActionButtons({ id }) {
  const { deleteTask, handleDisplay, setTaskToEdit } = useTasks();

  const handleDelete = () => {
    deleteTask(id);
  };
  const handleEdit = () => {
    setTaskToEdit(id);
    handleDisplay();
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 0.5 } }}>
      <Fab
        size="small"
        color="white"
        aria-label="delete"
        style={{ border: "3px solid #9a0036" }}
        onClick={handleDelete}
      >
        <DeleteOutlineOutlinedIcon
          style={{ width: "20px", color: "#9a0036" }}
        />
      </Fab>

      <Fab
        size="small"
        color="white"
        aria-label="edit"
        style={{ border: "3px solid #115293" }}
        onClick={handleEdit}
      >
        <EditIcon style={{ width: "20px", color: "#115293" }} />
      </Fab>

      <Fab
        size="small"
        aria-label="like"
        style={{ border: "3px solid #82bc3e" }}
      >
        <Done style={{ width: "20px", color: "#82bc3e" }} />
      </Fab>
    </Box>
  );
}
