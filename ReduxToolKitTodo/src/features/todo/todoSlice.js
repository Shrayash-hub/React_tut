/**
 * CONCEPT 1: Redux Toolkit (RTK) Utilities
 * createSlice: A function that accepts an initial state, an object of reducer functions, 
 * and a "slice name", and automatically generates action creators and action types.
 * nanoid: A helper function that generates a short, non-sequential, unique ID.
 */
import { createSlice, nanoid } from "@reduxjs/toolkit";

/**
 * CONCEPT 2: Initial State
 * This defines the starting structure of your data store. 
 * It ensures that when the app loads, the 'todos' array isn't empty.
 */
const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};

/**
 * CONCEPT 3: The Slice
 * A "slice" is a collection of Redux reducer logic and actions for a single 
 * feature in your app (like 'todos' or 'user').
 */
export const todoSlice = createSlice({
  name: "todo",      // Used to prefix the generated action types
  initialState,      // The initial data defined above
  
  /**
   * CONCEPT 4: Reducers
   * Reducers define HOW the state changes. 
   * RTK uses 'Immer' internally, which allows you to write "mutating" logic 
   * (like .push()) that is safely converted into immutable updates.
   */
  reducers: {
    // state: Current value in the store
    // action: Object containing the 'payload' (data sent to the reducer)
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),               // Generates unique ID
        text: action.payload.text,  // Grabs text from the dispatched data
      };
      state.todos.push(todo);       // Directly pushes to state (thanks to Immer)
    },

    removeTodo: (state, action) => {
      // action.payload here is the ID passed from the component
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //
    },
  }
});

/**
 * CONCEPT 5: Action Creators
 * createSlice automatically generates an action creator for every reducer 
 * function you define. We destructure them here for easy use in components.
 */
export const {addTodo, removeTodo} = todoSlice.actions

/**
 * CONCEPT 6: The Reducer
 * The store needs the main reducer function to know how to handle these 
 * specific actions. We export it as a default export.
 */
export default todoSlice.reducer