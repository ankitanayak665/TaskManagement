import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/tasks'); // This will redirect to the Tasks page
      };
      const handleSignUp =()=>{
        navigate('/signUp');
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
          <Typography sx={{ display:"flex",justifyContent:"center",mt:"5vh", fontWeight:"10px"}}>Login</Typography>
          <Box sx={{p:"10px",display:"flex",justifyContent:"center",flexDirection:"column" ,border: "1px solid",borderColor:"blue", width:"40%",alignItems: "center"}}>
          <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        }
      }} id="outlined-basic" label="Email" variant="outlined" />
          <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" label="Email" variant="outlined" />
          <Button onClick={handleClick} variant="contained" sx={{mt:"10px",width:"100%"}}>Login</Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Don't have an account?</Typography>
          <Button onClick={handleSignUp} sx={{textTransform: "none"}}>Signup</Button>
        </Box>
          <Button variant="contained" sx={{textTransform: "none"}}>Login with Google</Button>
          </Box>
          </Box>
        </Box>
      );
}

export default LoginPage
