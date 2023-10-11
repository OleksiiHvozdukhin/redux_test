import { combineReducers } from 'redux';

import { addTask, deleteTask, toggleCompleted } from './action';
import { createReducer } from '@reduxjs/toolkit';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    // ✅ Immer заменит это на операцию обновления
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    // ✅ Immer заменит это на операцию обновления
    const index = state.findIndex(task => task.id === action.payload);
    return state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    // ✅ Immer заменит это на операцию обновления
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    // ✅ Immer заменит это на операцию обновления
    state.status = action.payload;
  },
});

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
