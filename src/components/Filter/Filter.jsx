import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";
import { useRef } from "react";

const Filter = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const refs = {
    allBtnRef: useRef(null),
    activeBtnRef: useRef(null),
    completedBtnRef: useRef(null),
  };
  const filterTasks = (e) => {
    Object.values(refs)
      .map((elem) => elem.current)
      .forEach((elem) => elem.classList.remove("filter--active"));

    e.target.classList.add("filter--active");

    const type = e.target.id.trim();
    if (!type) return;
    dispatch(setFilter(type));
  };
  return (
    <div>
      <h3 className="text-slate-300 mb-3">Filter by status</h3>
      <button
        id="all"
        type="button"
        className="p-1 bg-slate-600 text-slate-400 rounded-sm mr-2 duration-300"
        onClick={filterTasks}
        ref={refs.allBtnRef}
      >
        All
      </button>
      <button
        id="active"
        type="button"
        className="p-1 bg-slate-600 text-slate-400  rounded-sm mr-2 duration-300"
        onClick={filterTasks}
        ref={refs.activeBtnRef}
      >
        Active
      </button>
      <button
        id="completed"
        type="button"
        className="p-1 bg-slate-600 text-slate-400  rounded-sm duration-300"
        onClick={filterTasks}
        ref={refs.completedBtnRef}
      >
        Completed
      </button>
    </div>
  );
};
export default Filter;
