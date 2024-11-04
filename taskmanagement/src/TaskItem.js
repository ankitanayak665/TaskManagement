import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function TaskItem() {
  return (
    <div>
    <Box sx={{p:"5px",height:"auto",backgroundColor:"lightblue"}}>
        <Box>
        <Box><Typography>Task 3</Typography></Box>
        <Box><Typography>Description 3</Typography></Box>
        <Box><Typography>Created at</Typography></Box>
        </Box>
        <Box sx={{display:"flex",justifyContent: 'flex-end',gap:"2px"}}>
            <Button size='small' variant='contained' sx={{textTransform: "none"}}>Delete</Button>
            <Button size='small' variant='contained' sx={{textTransform: "none"}}>Edit</Button>
            <Button size='small' variant='contained' sx={{textTransform: "none"}}>View Details</Button>
            
        </Box>
    </Box>


    </div>
  )
}

export default TaskItem
