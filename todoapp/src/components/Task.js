import React, { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from "react-redux";
import Button from '@material-ui/core/Button';
import { TextField, Typography } from '@mui/material';
import { addItems, updateList } from '../redux/slices/TaskSlice';

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const listItems = useSelector((state) => {
    return state?.app?.todoTasks
  });
  const userData = useSelector((state) => {
    return state?.app?.loggedInUser
  });
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateList({userData}))
    },[userData]);
    
    const handleOnChange = (e) =>{
        setTask(e.target.value)
    }
    const handleAdd = () =>{
        setTask(" ")
        let addItemList = [...listItems,{text:task}]
        dispatch(addItems({addItemList,userData}))
        dispatch(updateList({userData}))
       
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
        dispatch(addItems({addItemList,userData}));
        dispatch(updateList({userData}));
      };
      const handleEdit = (index) => {
        setEditIndex(index); 
        setTask(listItems[index]?.text || ""); 
      };
    
      const handleSave = () => {
        if (task.trim() === "") return; 
        let addItemList = listItems.map((item, i) =>
          i === editIndex ? { ...item, text: task } : item
        );
        dispatch(addItems({addItemList,userData}));
        dispatch(updateList({userData}));
        setTask(""); 
        setEditIndex(null); 
      };
    return(
        <>
        <Box>
          <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>Todo List</Typography>
        
        </Box>
        <Box>
            <TextField value={task} sx={{width:"30%"}} onChange={(e)=>{handleOnChange(e)}}>
            </TextField>
            {editIndex !== null ? (
          <Button onClick={handleSave} style={{backgroundColor:"blue",marginLeft:"5px",marginTop:"5px",color:"white"}}>Save</Button>
        ) : (
          <Button onClick={handleAdd} style={{backgroundColor:"blue",marginLeft:"5px",marginTop:"5px",color:"white"}}>Add</Button>
        )}
        </Box>
        {listItems.map((item,index)=>(
            <Box display={'flex'}  alignItems={'center'} sx={{mt:"0.5%"}}>
            <Box sx={{
              textDecoration: item.completed ? "line-through" : "none",
              flexGrow: 1,
              backgroundColor:"lightblue",
              border:"0.5px solid grey",
              alignItems:"center",
              padding:"5px",
              
            }}>
              <Typography style={{fontSize:"14px"}}>{item?.text}</Typography>
            </Box>
            <Box>
            <Button style={{backgroundColor:"blue",marginLeft:"5px",marginTop:"5px",color:"white"}} disabled={item.completed} onClick={() => handleComplete(index)}>
              Complete
            </Button>
            <Button style={{backgroundColor:"blue",marginLeft:"5px",marginTop:"5px",color:"white"}} onClick={()=>{handleDelete(index)}}>Delete</Button>
            <Button style={{backgroundColor:"blue",marginLeft:"5px",marginTop:"5px",color:"white"}} onClick={()=>{handleEdit(index)}}>Edit</Button>
            </Box>
            </Box>
    ))}
        
        </>
    )
};

export default ToDoList;
