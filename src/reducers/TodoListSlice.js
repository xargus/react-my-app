import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from '../api/posts';

export const getList = createAsyncThunk('posts', async (data, { rejectWithValue }) => {
    try {
        const response = await getPosts();
        return response.data;
    } catch (error) {
        if (!error.response) {
            throw error;
        }
        return rejectWithValue(error.response.data);
    }
});

const initialTodoListState = {
    items: [],
    error : ''
};

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: initialTodoListState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getList.fulfilled, (state, { payload }) => {
            state.items = state.items.concat(payload);
        });
        builder.addCase(getList.rejected, (state, action) => {
            if (action.payload) {
                state.error = action.payload.errorMessage
            } else {
                state.error = action.error.message
            }
            console.log(`error : ${state.error}`);
        });
    }
});

export const { addTodo } = todoListSlice.actions;