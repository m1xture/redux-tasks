// import { createReducer } from "@reduxjs/toolkit";
// import { addManyTasks, addTask, completeTask, deleteTask } from "./actions";

// // export const tasksReducer = (state = [], action) => {
// //   switch (action.type) {
// //     case "tasks/addTask":
// //       return [...state, action.payload];
// //     case "tasks/addManyTasks":
// //       return action.payload;
// //     case "tasks/deleteTask":
// //       return state.filter((task) => task.id !== action.payload);
// //     case "tasks/completeTask":
// //       return state.map((task) => {
// //         if (task.id !== action.payload) {
// //           return task;
// //         }
// //         return { ...task, completed: !task.completed };
// //       });
// //     default:
// //       return state;
// //   }
// // };

// export const tasksReducer = createReducer([], (builder) => {
//   builder.addCase(addTask, (state, action) => {
//     return [...state, action.payload];
//   });
//   builder.addCase(addManyTasks, (state, action) => {
//     return action.payload;
//   });
//   builder.addCase(deleteTask, (state, action) => {
//     return state.filter((task) => task.id !== action.payload);
//   });
//   builder.addCase(completeTask, (state, action) => {
//     return state.map((task) => {
//       if (task.id !== action.payload) {
//         return task;
//       }
//       return { ...task, completed: !task.completed };
//     });
//   });
// });
