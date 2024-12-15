import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todoTasks: [],
    setTodoTasks:[],
    signUpDatas:[],
    getusersList:[],
    isLoading: false, // Added default value for `isLoading`
    message:""
};
const getAllTodotasks = createSlice({
    name: "allTodoTasks",
    initialState,
    reducers: {
        updateList: (state) => {
            const totalList = localStorage.getItem("listItems");
            if (totalList) {
            state.todoTasks = JSON.parse(totalList);
            }
          },
          addItems: (state, { payload }) => {
            state.setTodoTasks = payload
            localStorage.setItem("listItems", JSON.stringify(payload));
          },
          isSignUp: (state, { payload }) => {
            state.signUpDatas = payload
            localStorage.setItem("usersList", JSON.stringify(payload));
            console.log("fgdhgf",payload)
          },
          isLogin: (state, { payload }) => {
            const userList = localStorage.getItem("usersList");
            if (userList) {
            state.getusersList = JSON.parse(userList);
            }
          },
         
    }, 
});

export const { updateList ,addItems,isSignUp,isLogin} = getAllTodotasks.actions;
export default getAllTodotasks.reducer;