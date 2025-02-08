import AddForm from "./components/AddForm/AddForm";
import TaskList from "./components/TaskList/TaskList";
import Counter from "./components/Counter/Counter";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <>
      <div className="w-[60vw] ml-auto mr-auto flex justify-between items-center gap-5 flex-wrap lg:items-end lg:gap-0">
        <AddForm />
        <Filter />
        <Counter />
      </div>
      <TaskList />
    </>
  );
}

export default App;
