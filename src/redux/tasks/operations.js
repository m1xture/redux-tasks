import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67bf3e47b2320ee050131b57.mockapi.io/todos";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/");
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.post("/", data);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.delete(`/${data}`);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const completeTask = createAsyncThunk(
  "tasks/completeTask",
  async (data, thunkAPI) => {
    try {
      const resp = await axios.put(`/${data.id}`, data);
      return resp.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
