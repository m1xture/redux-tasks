import { useDispatch, useSelector } from "react-redux";
import Task from "../Task/Task";
import { useEffect, useRef } from "react";
import { addManyTasks, addTask } from "../../redux/actions";

const filters = {
  all() {
    if (localStorage.getItem("tasks")) {
      return JSON.parse(localStorage.getItem("tasks"));
    } else {
      return [];
    }
  },
  active() {
    if (localStorage.getItem("tasks")) {
      return JSON.parse(localStorage.getItem("tasks")).filter(
        (task) => !task.completed
      );
    }
  },
  completed() {
    if (localStorage.getItem("tasks")) {
      return JSON.parse(localStorage.getItem("tasks")).filter(
        (task) => task.completed
      );
    }
  },
};

const TaskList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (state.filter !== "all" && state.filter !== "") return;
    if (localStorage.getItem("tasks")) {
      if (isFirstRender.current) {
        dispatch(addManyTasks(JSON.parse(localStorage.getItem("tasks"))));
        isFirstRender.current = false;
        return;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);
  useEffect(() => {
    if (!state.filter) return;
    const res = filters[state.filter]();
    dispatch(addManyTasks(res));
  }, [state.filter]);
  if (state.tasks.length === 0) {
    return (
      <p className="text-slate-400 text-3xl block ml-auto mr-auto text-center mt-10">
        {"No tasks for today :("}
      </p>
    );
  }
  return (
    <ul className="flex items-center flex-col gap-4 pt-10 w-[60vw] ml-auto mr-auto">
      {state.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
