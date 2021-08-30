import { combineReducers } from "redux";
import { todoListSlice } from './TodoListSlice';

export default combineReducers({
    todoList : todoListSlice.reducer
});