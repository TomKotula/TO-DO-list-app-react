import { createSlice } from "@reduxjs/toolkit";
import {
  saveTasksInLocalStorage,
  getTaskFromLocalStorage,
} from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTaskFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
      saveTasksInLocalStorage(tasks);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: (state, { payload: taskId }) => {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks[index].done = !state.tasks[index].done;
      saveTasksInLocalStorage(state.tasks);
    },
    removeTask: (state, { payload: taskId }) => {
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      saveTasksInLocalStorage(state.tasks);
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => {
        task.done = true;
        saveTasksInLocalStorage({ tasks });
      });
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
      saveTasksInLocalStorage(state.tasks);
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  fetchExampleTasks,
  setTasks,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const getTaskById = (state, taskId) =>
  selectTasksState(state).tasks.find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const { tasks } = selectTasksState(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
