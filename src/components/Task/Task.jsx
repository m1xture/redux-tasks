import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../../redux/tasks/tasksSlice";
import TrashIcon from "../../images/trash.svg";
import { Checkbox } from "@mui/material";
import CheckboxIcon from "../../images/checkbox.svg";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const deleteFn = (e) => {
    const id = e.target.closest("li").id;
    console.log(e.target.closest("li"));
    e.target.closest("li").animate(
      [
        { transform: "translate(0)", opacity: 1 },
        { transform: "translate(0, 100px)", opacity: 0 },
      ],
      {
        duration: 600,
      }
    );
    setTimeout(() => {
      dispatch(deleteTask(id));
    }, 580);
  };
  const endTask = (e) => {
    const id = e.target.closest("li").id;
    dispatch(completeTask(id));
  };
  return (
    <li
      id={task.id}
      className="bg-slate-700 rounded-md w-[100%] flex justify-between p-4"
    >
      <div className="flex items-center">
        {/* <input
          type="checkbox"
          className="bg-slate-400 mr-5"
          checked={task.completed}
          onInput={endTask}
        /> */}
        <Checkbox
          className="mr-5 bg-slate-400"
          onChange={endTask}
          checked={task.completed}
          sx={{
            color: "#37549c",
            width: 2,
            marginRight: "5em",
            "&.Mui-checked": {
              color: "#37549c",
            },
          }}
        />
        <h3 className="text-xl text-slate-300 text-balance">{task.title}</h3>
      </div>
      <button type="button" className="w-5" onClick={deleteFn}>
        <img
          src={TrashIcon}
          alt="trash icon"
          className="hover:stroke-slate-50"
        />
      </button>
    </li>
  );
};

export default Task;
