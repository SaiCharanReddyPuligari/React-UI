import { createSlice, nanoid } from "@reduxjs/toolkit";
//creating slices using reducers(funntions)

const initialState = {
    todos: [{id: nanoid(), text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action)=>{  //state holds the current state, and action carries the payload(values)
            const todo = {
                id: nanoid(),  //generates a random unique ID, we can specify the lenght if we want
                text: action.payload //payload is the object parameter we pass like text: and completed: fields
            }
            state.todos.push(todo);
        }, //for every reducer, you will have two parameters, state, and action
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
            //filter removes the todo which matches the id from the todos
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions //exporting the functions

export default todoSlice.reducer //we export them to add to the stores as the reference for the state management usage