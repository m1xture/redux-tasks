import { tasksReducer } from "./tasks/tasksSlice";
import { filterReducer } from "./filter/filterSlice";
import { filteredTasksReducer } from "./filteredTasks/filteredTasksSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedTasksReducer = persistReducer(
  { key: "tasks", storage },
  tasksReducer
);
const persistedFilterReducer = persistReducer(
  {
    key: "filter",
    storage,
  },
  filterReducer
);

const persistedFilteredTasksReducer = persistReducer(
  {
    key: "filteredTasks",
    storage,
  },
  filteredTasksReducer
);

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
    filteredTasks: filteredTasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
