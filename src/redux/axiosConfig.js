import axios from "axios";

export const instance = axios.create({
  baseURL: "https://67bf3e47b2320ee050131b57.mockapi.io/todos",
});
