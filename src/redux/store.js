import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { tasksReducer, filterReducer } from "./reducers";

const initialState = {
  tasks: [],
  filteredTasks: [],
};
// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "":
//       return { ...state };
//   }

//   return state;
// };
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
