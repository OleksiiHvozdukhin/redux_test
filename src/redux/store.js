import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filtersSlice';
import { tasksReducer } from './taskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
