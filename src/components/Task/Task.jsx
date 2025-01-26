import { useDispatch, useSelector } from "react-redux";
import { deleteTask, completeTask } from "../../redux/actions";
import { useRef } from "react";
import TrashIcon from "../../images/trash.svg";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const deleteFn = (e) => {
    const id = e.target.closest("li").id;
    dispatch(deleteTask(id));
  };
  const endTask = (e) => {
    const id = e.target.closest("li").id;
    console.log(id);
    const task = tasks[tasks.findIndex((elem) => elem.id === id)];
    // if (task.completed) {
    //   console.log("This task has already been completed");
    //   return;
    // }
    dispatch(completeTask(id));
  };
  return (
    <li
      id={task.id}
      className="bg-slate-700 rounded-md w-[100%] flex justify-between p-4"
    >
      <div className="flex">
        <input
          type="checkbox"
          className="bg-slate-400 mr-5"
          checked={task.completed}
          onInput={endTask}
        />
        <h3 className="text-xl text-slate-300">{task.title}</h3>
      </div>
      <button type="button" className="w-5" onClick={deleteFn}>
        <img src={TrashIcon} alt="trash icon" className="hover:stroke-slate-50" />
      </button>
    </li>
  );
};

export default Task;
