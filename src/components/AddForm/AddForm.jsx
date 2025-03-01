import { useDispatch } from "react-redux";
// import { addTask } from "../../redux/tasks/tasksSlice";
import { addTask } from "../../redux/tasks/operations";
import { toast } from "react-toastify";

const AddForm = () => {
  const dispatch = useDispatch();
  const submitFn = (e) => {
    e.preventDefault();
    const text = e.target.title.value.trim();
    if (text.length === 0)
      return toast.error("Empty task", {
        theme: "dark",
        hideProgressBar: true,
      });
    if (text.length < 4)
      return toast.error("Too short task", {
        theme: "dark",
        hideProgressBar: true,
      });
    dispatch(addTask({ title: text, completed: false }));
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
