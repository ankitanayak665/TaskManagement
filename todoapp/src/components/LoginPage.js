import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconButton, Snackbar, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from '../redux/slices/TaskSlice';
// import { loginUser } from './Redux/Action/taskAction';
function LoginPage() {
  const [open, setOpen] = useState(false);
  const [validation,setValidation] = useState("")
  const [login,setLogin]= useState({
    email:"",
    password:"",
  })
  const dispatch = useDispatch();
  const totalUserList = useSelector((state)=>state?.app?.getusersList)
  useEffect(()=>{
    dispatch(isLogin())
  },[])
  const validUser = useSelector((state)=>state)
  console.log("gfhgf",validUser)
  const handleInput =(e)=>{
    const { name, value } = e.target;
    setLogin((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
    const navigate = useNavigate();
    const handleClick = async() => {
      const isAnyFieldEmpty = Object.values(login).some(value => value === "");
      if(!isAnyFieldEmpty){
        setLoading(true)
      try {
        const  isValidUser = totalUserList.some(user => user.email === login.email && user.password === login.password);
        console.log("fdsg",isValidUser,login,totalUserList)
        if(isValidUser){
          navigate('/tasks');
        }
        // dispatch(loginUser(login)).then((res)=>{
        //   if(res?.meta?.requestStatus === "fulfilled"){
        //     navigate('/tasks');
        //   }
        // })
        // dispatch(isLogin())

      } catch (error) {
        setValidation("Please enter valid Credential")
      setOpen(true);

      }
    }else{
      setOpen(true);
    }
      };
      const handleSignUp =()=>{
        navigate('/signUp');
      }
      const handleClose = (event, reason) => {
        setValidation("")
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      
      const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
      
      const [loading, setLoading] = React.useState(false);

      // const handleToggleLoading = () => {
      //   setLoading((prev) => !prev); // Toggle loading state
      // };
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column" ,alignItems: "center",}}>
          <Typography sx={{ display:"flex",justifyContent:"center",mt:"5vh", fontWeight:"10px"}}>Login</Typography>
          <Box sx={{p:"10px",display:"flex",justifyContent:"center",flexDirection:"column" ,border: "1px solid",borderColor:"blue", width:"40%",alignItems: "center"}}>
          <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        }
      }} id="outlined-basic" name="email" label="Email" variant="outlined" onChange={(e)=>{handleInput(e)}}/>
          <TextField sx={{
        mt: "10px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
          height: "40px", // Set the same height for consistency
        },
      }} id="outlined-basic" name="password" label="Password" variant="outlined" onChange={(e)=>{handleInput(e)}}/>
          <Button onClick={handleClick} variant="contained" sx={{mt:"10px",width:"100%"}}>Login</Button>
          <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Don't have an account?</Typography>
          <Button onClick={handleSignUp} sx={{textTransform: "none"}}>Signup</Button>
        </Box>
          {/* <Button variant="contained" sx={{textTransform: "none"}}>Login with Google</Button> */}
          </Box>
          </Box>
          
          <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={validation? validation : "No datas found"}
        action={action}
      />
        </Box>
      
      );
}

export default LoginPage
