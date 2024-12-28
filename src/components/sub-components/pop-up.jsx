import TaskAltIcon from "@mui/icons-material/TaskAlt";

function Popup() {
  const popupStyle = {
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#29712d",
    position: "fixed",
    left: "5px",
    bottom: "5px",
    width: "150px",
    height: "50px",
    zIndex: "1",
    color: "white",
  };
  return (
    <div style={popupStyle}>
      <h1>تم التعديل بنجاح</h1>
      <TaskAltIcon />
    </div>
  );
}

export default Popup;
