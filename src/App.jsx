import "./App.css";
import Card from "./components/card";
import EditCard from "./components/sub-components/edit-popup";
import { useTasks } from "./common/TasksContext";
import DeletePopup from "./components/sub-components/delete-popup copy";

function App() {
  const { editDisplayed,deleteDisplayed } = useTasks();
  const displayEdit = editDisplayed ? <EditCard /> : null;
  const displayDelete = deleteDisplayed ? <DeletePopup /> : null;

  return (
    <>
      <div className="container">
        <Card />
        {displayEdit}
        {displayDelete}
      </div>
    </>
  );
}

export default App;
