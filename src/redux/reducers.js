export const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "tasks/addTask":
      return [...state, action.payload];
    case "tasks/addManyTasks":
      return action.payload;
    case "tasks/deleteTask":
      return state.filter((task) => task.id !== action.payload);
    case "tasks/completeTask":
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
};

export const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "filter/setFilter":
      return action.payload;
    default:
      return state;
  }
};
