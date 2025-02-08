import { tasksReducer } from "./tasks/tasksSlice";
import { filterReducer } from "./filter/filterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
});
