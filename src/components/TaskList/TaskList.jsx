import { useDispatch, useSelector } from "react-redux";
import Task from "../Task/Task";
import { useEffect, useRef } from "react";
import { addManyTasks } from "../../redux/tasks/tasksSlice";
import { Fade } from "react-awesome-reveal";
import { setFilteredTasks } from "../../redux/filteredTasks/filteredTasksSlice";
import Loader from "../Loader/Loader";
import { fetchTasks } from "../../redux/tasks/operations";

const TaskList = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { tasks, isLoading, error } = useSelector((state) => state.tasks);
  const isFirstRender = useRef(true);
  const filters = {
    all() {
      return state.tasks.tasks;
    },
    active() {
      return state.tasks.tasks.filter((task) => !task.completed);
    },
    completed() {
      return state.tasks.tasks.filter((task) => task.completed);
    },
  };
  useEffect(() => {
    console.log("alalalalfjfwl");
    dispatch(fetchTasks());
  }, []);
  // useEffect(() => {
  //   if (state.filter !== "all" && state.filter !== "") return;
  //   if (localStorage.getItem("tasks")) {
  //     if (isFirstRender.current) {
  //       dispatch(addManyTasks(JSON.parse(localStorage.getItem("tasks"))));
  //       isFirstRender.current = false;
  //       return;
  //     }
  //   }
  //   localStorage.setItem("tasks", JSON.stringify(state.tasks));
  // }, [state.tasks]);
  console.log(state);
  useEffect(() => {
    console.log("LOGGEd");
    if (!state.filter) return;
    console.log("nexty", state.filter);
    const res = filters[state.filter]();
    console.log(res);
    dispatch(setFilteredTasks(res));
  }, [state.filter]);
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>Error - {error}</p>;
  }
  if (tasks.length === 0) {
    return (
      <p className="text-slate-400 text-3xl block ml-auto mr-auto text-center mt-10">
        {"No tasks for today :("}
      </p>
    );
  }
  if (
    state.filteredTasks.length !== 0 &&
    state.filter !== "all" &&
    state.filter !== ""
  ) {
    return (
      <Fade className="w-[100%]">
        <ul className="flex items-center flex-col gap-4 pt-10 w-[60vw] ml-auto mr-auto">
          {state.filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      </Fade>
    );
  }
  return (
    <Fade className="w-[100%]">
      <ul className="flex items-center flex-col gap-4 pt-10 w-[60vw] ml-auto mr-auto">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </Fade>
  );
};

export default TaskList;
