import { createSlice } from "@reduxjs/toolkit";

const filteredTasksSlice = createSlice({
  name: "ilteredTasks",
  initialState: [],
  reducers: {
    setFilteredTasks(state, action) {
      return action.payload;
    },
  },
});

export const filteredTasksReducer = filteredTasksSlice.reducer;
export const { setFilteredTasks } = filteredTasksSlice.actions;
