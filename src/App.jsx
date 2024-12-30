import "./App.css";
import Card from "./components/card";
import EditCard from "./components/sub-components/edit-popup";
import { useTasks } from "./common/TasksContext";
import DeletePopup from "./components/sub-components/delete-popup copy";
import Popup from "./components/sub-components/pop-up";

function App() {
  const { editDisplayed, deleteDisplayed, popupDisplayed } = useTasks();

  return (
    <>
      <div className="container">
        <Card />
        {editDisplayed && <EditCard />}
        {deleteDisplayed && <DeletePopup />}
        {popupDisplayed && <Popup />}
      </div>
    </>
  );
}

export default App;
