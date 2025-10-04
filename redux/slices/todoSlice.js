import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    value: "",
    id: null
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {

        }
    }
})