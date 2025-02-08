import { useSelector } from "react-redux";

const Counter = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="">
      <h2 className="text-lg text-slate-200 text-right">Tasks</h2>
      <p className="text-slate-400 text-right">
        Active: {tasks.filter((task) => !task.completed).length}
      </p>
      <p className="text-slate-400 text-right">
        Completed: {tasks.filter((task) => task.completed).length}
      </p>
    </div>
  );
};

export default Counter;
