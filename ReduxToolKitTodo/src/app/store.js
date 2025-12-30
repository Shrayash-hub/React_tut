/**
 * CONCEPT 1: configureStore
 * This is a standard Redux Toolkit (RTK) function that simplifies store setup.
 * It automatically combines your reducers, adds essential middleware (like 
 * Redux Thunk for async logic), and enables Redux DevTools by default.
 */
import { configureStore } from '@reduxjs/toolkit';

/**
 * CONCEPT 2: Reducer Import
 * Here, we import the default export from your slice file.
 * While the file is named 'todoSlice', the default export is the reducer 
 * function that handles the state changes for the 'todo' feature.
 */
import todoReducer from '../features/todo/todoSlice';

/**
 * CONCEPT 3: The Store Object
 * The 'store' is an object that brings together the actions and reducers.
 * It holds the complete state tree of your application.
 */
export const store = configureStore({
    /**
     * CONCEPT 4: Reducer Mapping
     * The 'reducer' property tells the store which function is responsible 
     * for managing state updates.
     * In a larger app, you would pass an object here to combine multiple 
     * reducers (e.g., { todos: todoReducer, user: userReducer }).
     */
    reducer: todoReducer
});