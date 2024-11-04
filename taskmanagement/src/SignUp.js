import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();

   const handleSignUp =()=>{

   }
   const handleLogin =()=>{
    navigate('/login');
   }
  return (
    <Box sx={{ flexGrow: 1 }}>
          {/* <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <IconButton ><EventNoteIcon /></IconButton>
              <div>
              <Button color="inherit" sx={{ textTransform: "none",color:"blue" }} variant="contained" size="small">Login</Button>
    
              <Button color="inherit" sx={{ textTransform: "none" }}>Signup</Button>
              </div>
            </Toolbar>
          </AppBar> */}
          <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column" ,alignItems: "center",}}>
          <Typography sx={{ display:"flex",justifyContent:"center",mt:"5vh", fontWeight:"10px"}}>Signup</Typography>
          <Box sx={{p:"10px",display:"flex",justifyContent:"center",flexDirection:"column" ,border: "1px solid",borderColor:"blue", width:"40%",alignItems: "center"}}>
          <TextField
           sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        }
      }} id="outlined-basic" label="First Name" variant="outlined" />
          <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" label="Email" variant="outlined" />
      <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" label="Password" variant="outlined" />
      <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" label="Confirm Password" variant="outlined" />
          <Button onClick={handleSignUp} variant="contained" sx={{mt:"10px",width:"100%"}}>Signup</Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Already have an account?</Typography>
          <Button sx={{textTransform: "none"}} onClick={handleLogin}>Login</Button>
        </Box>
          <Button variant="contained" sx={{textTransform: "none"}}>Signup with Google</Button>
          </Box>
          </Box>
        </Box>
  )
}

export default SignUp
