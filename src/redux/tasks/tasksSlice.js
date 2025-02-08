import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            title,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    addManyTasks(state, action) {
      return action.payload;
    },
    deleteTask(state, action) {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
    },
    completeTask(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addManyTasks, addTask, deleteTask, completeTask } =
  tasksSlice.actions;
