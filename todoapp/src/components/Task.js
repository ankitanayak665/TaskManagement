import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import { TextField } from '@mui/material';
import { addItems, updateList } from '../redux/slices/TaskSlice';

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
//   const [taskList, setTaskList] = useState([]);
  const listItems = useSelector((state) => {
    return state?.app?.todoTasks
  });
  const userData = useSelector((state) => {
    return state?.app?.loggedInUser
  });
  console.log("xhghjh",userData)
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateList({userData}))
    },[userData]);
    // useEffect(()=>{
    // setTaskList(listItems)
    // },[listItems])

    const handleOnChange = (e) =>{
        console.log("jhgdjh",e.target.value)
        setTask(e.target.value)
    }
    const handleAdd = () =>{
        setTask(" ")
        // setTaskList()
        let addItemList = [...listItems,{text:task}]
        dispatch(addItems({addItemList,userData}))
        dispatch(updateList({userData}))
        // localStorage.setItem("listItems", JSON.stringify([...taskList,task]));
        // dispatch(updateList(JSON.stringify([...taskList,task])))
    }
    const handleDelete = (index) =>{
        let addItemList = [...listItems];
        addItemList.splice(index,1)
        dispatch(addItems({addItemList,userData}))
        dispatch(updateList({userData}))
    }
    
    const handleComplete = (index) => {
        let addItemList = listItems.map((item, i) =>
          i === index ?{ ...item, completed: true } : item
        );
        console.log("gfhgfj",addItemList)
        dispatch(addItems({addItemList,userData}));
        dispatch(updateList({userData}));
      };
      const handleEdit = (index) => {
        setEditIndex(index); // Set the index being edited
        setTask(listItems[index]?.text || ""); // Populate the selected task's text in the input field
      };
    
      const handleSave = () => {
        if (task.trim() === "") return; // Avoid saving empty tasks
        let addItemList = listItems.map((item, i) =>
          i === editIndex ? { ...item, text: task } : item
        );
        dispatch(addItems({addItemList,userData}));
        dispatch(updateList({userData}));
        setTask(""); // Clear the input field
        setEditIndex(null); // Exit edit mode
      };
    return(
        <>
        <Box>
        Todo List
        </Box>
        <Box>
            <TextField value={task} onChange={(e)=>{handleOnChange(e)}}>
            </TextField>
            {editIndex !== null ? (
          <Button onClick={handleSave}>Save</Button>
        ) : (
          <Button onClick={handleAdd}>Add</Button>
        )}
        </Box>
        {listItems.map((item,index)=>(
            <Box display={'flex'}>
            <Box sx={{
              textDecoration: item.completed ? "line-through" : "none",
              flexGrow: 1,
            }}>
              {item?.text}
            </Box>
            <Box>
            <Button disabled={item.completed} onClick={() => handleComplete(index)}>
              Complete
            </Button>
            <Button onClick={()=>{handleDelete(index)}}>Delete</Button>
            <Button onClick={()=>{handleEdit(index)}}>Edit</Button>
            </Box>
            </Box>
    ))}
        
        </>
    )
};

export default ToDoList;
