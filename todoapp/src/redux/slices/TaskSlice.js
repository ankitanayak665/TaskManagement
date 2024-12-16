import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todoTasks: [],
    setTodoTasks:[],
    signUpDatas:[],
    getusersList:[],
    loggedInUser:{},
    isLoading: false, // Added default value for `isLoading`
    message:""
};
const getAllTodotasks = createSlice({
    name: "allTodoTasks",
    initialState,
    reducers: {
        updateList: (state,{payload}) => {
            const totalList = localStorage.getItem(`tasks_${payload.userData.email}`);
          console.log("fdxghghj",payload,totalList)

            if (totalList) {
            state.todoTasks = JSON.parse(totalList);
            }else{
            state.todoTasks = [];
              
            }
          },
          addItems: (state, { payload }) => {
            console.log("fgchg",payload)
            state.setTodoTasks = payload.addItemList
            localStorage.setItem(`tasks_${payload.userData.email}`, JSON.stringify(payload.addItemList));
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
          loggedInUser: (state, { payload }) => {
            console.log("chjhj",payload)
            state.loggedInUser = payload
          },
          logOutUser: (state, { payload }) => {
            console.log("chjhjj",payload)
            localStorage.removeItem(`tasks_${payload.userData.email}`);

          },
         
    }, 
});

export const { updateList ,addItems,isSignUp,isLogin,loggedInUser,logOutUser} = getAllTodotasks.actions;
export default getAllTodotasks.reducer;