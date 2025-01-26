import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

const AddForm = () => {
  const dispatch = useDispatch();
  const submitFn = (e) => {
    e.preventDefault();
    const text = e.target.title.value.trim();
    dispatch(addTask(text));
    e.target.reset();
  };
  return (
    <form onSubmit={submitFn} className="">
      <input
        type="text"
        name="title"
        placeholder="Enter task text..."
        className="rounded-sm bg-slate-600 p-1 text-slate-300 focus:outline-none"
        autoComplete="off"
      />
      <button
        className="p-1 bg-slate-600 ml-3 rounded-sm text-slate-300"
        type="submit"
      >
        Add task
      </button>
    </form>
  );
};

export default AddForm;
