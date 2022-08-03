import React, { useContext, useEffect, useState } from 'react'
import { Link,  useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Grid,Container, Box, Typography, TextField, Button } from '@mui/material'
import { toast } from 'react-toastify'
import { Store } from '../../Store'


export const Signup = () => { 
  const navigate = useNavigate();


  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [confirmPassword, setconfirmPassword]= useState('');

  const { state, dispatch: ctxDispatch} = useContext(Store)
  const { userInfo } = state
  const formsubmitHandler=async (e)=>{
    e.preventDefault();
      console.log(password);
      console.log(email);

    if(password !== confirmPassword ){
      toast.error('Password do not match')
      return;
    }
    try{
      const { data } = await axios.post('/api/users/signUp', {
       name,
        email, 
        password,
      });
      ctxDispatch({type: 'USER_SIGNIN', payload: data})
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/shipping-address');
    }catch (err) {
      toast.error('Invalid email or password');
    }
  }
useEffect( ()=>{
if (userInfo === true){
  navigate('/');
}
},[navigate, userInfo]);
  return (
    <>
    <Container maxWidth="sm"  sx={{height: 'auto', marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
              <Typography variant="h3" 
               sx={{ maxWidth: '450px',textAlign: 'center', height: '10%', alignItems: 'center', pt:2  }}>
                ISonlineSHOP</Typography>

     <Grid container >
        <Grid item xs={12} sx={{ mt: '2%'  }} >
          <Box sx={{maxWidth: '450px', alignItems: 'center',border: '1px solid gray', borderRadius: '5px' ,
          background: 'white', height: 'auto' }}>
              <Box sx={{py:3, px: 5 }}>
                  <Typography sx={{mb: 2}} variant="h4">
                  Sign-Up
                  </Typography>
                  
                  <form onSubmit={formsubmitHandler} >
                    <label ><strong >Email or mobile phone number</strong></label>
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setName(e.target.value)} 
                  placeholder='Enter Name...'  name="name" label=""  autoFocus={true}  variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setEmail(e.target.value)} 
                  placeholder='Enter Email...'  name="email" label="" type="email"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setPassword(e.target.value)} 
                    name="password" label="" placeholder='Enter Password...' type="password"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setconfirmPassword(e.target.value)} 
                    name="confirmPassword" label="" placeholder='Confirm Password...' type="password"   variant="standard" />
                    <Button style={{border: 2, background: '#ffc000', width: '100%', color: 'black'}}
                    type="submit">Continue</Button>
                    </form>
                     
                     <Typography component="p" sx={{mt:4}}>
                      By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                     </Typography>

                        <div>

      <Box mt='1'>
        Already have an account?{ ' '}
      <Link to='/sign_in'>Sign In</Link>
      </Box>
      
    </div>                  
              </Box>
          </Box>
        </Grid>
        
        
        </Grid>   
        
    </Container>
        </>
  )
}
