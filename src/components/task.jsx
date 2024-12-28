/* eslint-disable react/prop-types */
import FloatingActionButtons from "./sub-components/action-buuton";

function Task({ id, title, desc }) {

  return (
    <div className="task">
      <FloatingActionButtons id={id} />
      <div className="text">
        <h2>{title}</h2>
        <h4>{desc}</h4>
      </div>
    </div>
  );
}

export default Task;
