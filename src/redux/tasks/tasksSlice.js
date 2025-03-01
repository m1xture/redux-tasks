import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks, addTask, deleteTask, completeTask } from "./operations";

const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  // reducers: {
  //   addTask: {
  //     reducer(state, action) {
  //       state.tasks.push(action.payload);
  //     },
  //     prepare(title) {
  //       return {
  //         payload: {
  //           title,
  //           id: nanoid(),
  //           completed: false,
  //         },
  //       };
  //     },
  //   },
  //   addManyTasks(state, action) {
  //     return action.payload;
  //   },
  //   deleteTask(state, action) {
  //     const index = state.tasks.findIndex((task) => task.id === action.payload);
  //     state.tasks.splice(index, 1);
  //   },
  //   completeTask(state, action) {
  //     for (const task of state.tasks) {
  //       if (task.id === action.payload) {
  //         task.completed = !task.completed;
  //         break;
  //       }
  //     }
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks = state.tasks.filter(
          (task) => task.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(completeTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(completeTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.tasks.splice(
          state.tasks.findIndex((task) => task.id === action.payload.id),
          1,
          action.payload
        );
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addManyTasks } = tasksSlice.actions;
