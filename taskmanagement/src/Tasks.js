import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import TaskItem from './TaskItem'
import axios from 'axios';

function Tasks() {
    const [taskDetail,setTaskDetail] = useState({
        title:"",
        description:""
    })
    const handleDescription =(value)=>{
        setTaskDetail({...taskDetail,
            description:value
        })
    }
    
    const handleTitle =(value)=>{
        setTaskDetail({...taskDetail,
            title:value
        })
    }
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleSave = async () => {

        try {
          // Send a POST request to /Tasks with taskDetail as data
          const response = await axios.post('http://localhost:5000/addTask', taskDetail);
    
          // Handle response as needed
          console.log('Task saved:', response.data);
    
          // Clear the form fields
          setTaskDetail({
            title: '',
            description: ''
          });
    
          handleClose(); // Call handleClose to close any dialog or modal if needed
        } catch (error) {
          console.error('Error saving task:', error);
        }

        try {
          // Send a POST request to /Tasks with taskDetail as data
          const tasks = await axios.get('http://localhost:5000/allTasks');
          console.log("gfdhg",tasks);
          
        }catch(error){
          console.error('Error getting task:', error);
          
        }
    
      };
  return (
    <div>
      <Button size='small' sx={{textTransform: "none",mt:"10px",ml:"5px",width:"10%"}} variant="contained" onClick={handleClickOpen}>Add Task</Button>
      <Paper elevation={2} sx={{ ml: "5px", mr: "5px", mt: "15px", height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ ml: "10px" }}>Search:</Typography>
        <TextField 
          sx={{
            ml: "5px",
            height: "80%", // Use full height of the Paper for the TextField
            width: "60%",
            "& .MuiOutlinedInput-root": {
              height: "100%", // Ensure the input area uses the full height
              "& input": {
                padding: "0 10px", // Add horizontal padding for the input
                height: "100%", // Ensure input height matches
                boxSizing: "border-box", // Ensures padding doesn't affect total height
              },
            },
          }}
          placeholder='Search..'
        />
      </div>
      <div style={{ display: "flex", alignItems: "center",marginRight:"10px"}}>
        <Typography sx={{whiteSpace: "nowrap"}}>Sort By:</Typography>
        <Select sx={{
              height: "40%", // Set height of the Select component
              width: "30%", // Set width of the Select component
              "& .MuiSelect-select": {
                height: "30%", // Set height for the inner select area
                padding: "0", // Remove default padding
                display: "flex", // Enable flex for centering content
                alignItems: "center", // Center content vertically
              },
              
            // }}
    
        }}
        >
          {/* <MenuItem value=""><em>Recent</em></MenuItem> */}
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
        </Select>
      </div>
    </Paper>
    <Box
      sx={{
        p:"10px",
        display: 'flex',
        flexDirection: 'row',
        height: '100vh', // Full height of the viewport
        gap: '15px',
      }}
    >
      {/* Paper 1 */}
      <Paper
        elevation={3}
        sx={{
          flex: 1, // Take equal space
        //   display: 'flex',
        // alignItems: 'center',
        //   justifyContent: 'center',
        //   backgroundColor: '#f0f0f0', // Optional background color for visibility
        }}
      >
        <Box sx={{display:"flex",flexDirection:"column",padding:"5px"}}>
        <Box sx={{mt:"5px",height:"30px",backgroundColor:"blue",display:"flex",alignItems:"center"}}>
            <Typography sx={{fontSize:"14px",ml:"10px",fontWeight:"bold",color:"white"}} variant="h5">TODO</Typography>
        </Box>
        <Box sx={{p:"5px"}}>
        <TaskItem />
        </Box>
        </Box>
      </Paper>

      {/* Paper 2 */}
      <Paper
        elevation={3}
        sx={{
          flex: 1, // Take equal space
          display: 'flex',
        //   alignItems: 'center',
          justifyContent: 'center',
        //   backgroundColor: '#e0e0e0', // Optional background color for visibility
        }}
      >
        <Box sx={{mt:"5px",height:"5%",width:"95%",backgroundColor:"blue",display:"flex",alignItems:"center"}}><Typography sx={{fontSize:"14px",ml:"10px",fontWeight:"bold",color:"white"}} variant="h5">IN PROGRESS</Typography></Box>
      </Paper>

      {/* Paper 3 */}
      <Paper
        elevation={3}
        sx={{
          flex: 1, // Take equal space
          display: 'flex',
        //   alignItems: 'center',
          justifyContent: 'center',
        //   backgroundColor: '#d0d0d0', // Optional background color for visibility
        }}
      >
        <Box sx={{mt:"5px",height:"5%",width:"95%",backgroundColor:"blue",display:"flex",alignItems:"center"}}><Typography sx={{fontSize:"14px",ml:"10px",fontWeight:"bold",color:"white"}} variant="h5">DONE</Typography></Box>
      </Paper>
    </Box>
    <Dialog
    open={open}
    onClose={handleClose}
    >
         <DialogTitle
          id="alert-dialog-title">
          Add Task
        </DialogTitle>
        <DialogContent
        >
          <DialogContentText
           id="alert-dialog-description">
            <Box>
            <Box><Typography>Title</Typography></Box>
            <Box><TextField variant="standard" onChange={(e)=>{handleTitle(e.target.value)}}></TextField></Box>
        </Box>
        <Box sx={{mt:"15px"}}>
            <Box><Typography>Description</Typography></Box>
            <Box><TextField variant="standard" onChange={(e)=>{handleDescription(e.target.value)}}></TextField></Box>
        </Box>
            
          </DialogContentText>
        </DialogContent> 
        {/* <Box>
            <Box><Typography>Title</Typography></Box>
            <Box><TextField variant="standard"></TextField></Box>
        </Box>
        <Box sx={{mt:"15px"}}>
            <Box><Typography>Description</Typography></Box>
            <Box><TextField variant="standard"></TextField></Box>
        </Box> */}
        <DialogActions>
          <Button variant='contained' size='small'  onClick={handleSave}>Save</Button>
          <Button variant='contained' size='small'onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
    </Dialog>
    </div>
  )
}

export default Tasks
