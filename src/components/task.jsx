/* eslint-disable react/prop-types */
// import { useTasks } from "../common/TasksContext";
import FloatingActionButtons from "./sub-components/action-buuton";

function Task({ id, title, desc }) {
  // const { tasks } = useTasks();
  // const task = tasks.find((task) => task.id === id);
  
  return (
    <div className="task">
      <FloatingActionButtons id={id} />
      <div className="text">
        <h2 style={{}}>
          {title}
        </h2>
        <h4>{desc}</h4>
      </div>
    </div>
  );
}

export default Task;
