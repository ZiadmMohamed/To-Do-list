import "./App.css";
import Card from "./components/card";
import EditCard from "./components/sub-components/edit-popup";
import { useTasks } from "./common/TasksContext";

function App() {
  const { display } = useTasks();
  const displayEdit = display ? <EditCard /> : null;

  return (
    <>
      <div className="container">
        <Card />
        {displayEdit}
      </div>
    </>
  );
}

export default App;
