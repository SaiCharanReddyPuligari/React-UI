//creating a store to store the values for state management.
//similar to how we can access the global variables and a better alternative for context API

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});

//1. we create a store using ConfigureStore and import all the reducers
//2. We make Slices(features) using createSlice and give a name, initialState, and reducers list
//3. Reducers are just funtions, and will have State and Action as parameters.
//4. State stores.todos the values of current state, and we use action to update the state using action.payload
//5. from slice file, import all the functions and reducer separately for easy access
