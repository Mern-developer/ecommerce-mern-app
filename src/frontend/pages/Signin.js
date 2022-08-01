import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from "axios";
import { Store } from '../../Store';

const Signin=()=>{
const navigate = useNavigate();
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');    
 
  const {state, dispatch: ctxDispatch}=useContext(Store);
  const {userInfo}=state;
  
  const formsubmitHandler= async (e)=>{
    e.preventDefault();
    try{
      const { data } = await axios.post('/api/users/signin', {
        email, 
        password,
      });
      ctxDispatch({type: 'USER_SIGNIN', payload: data})
      localStorage.setItem('userInfo', JSON.stringify(data));
     navigate( '/shipping-address');
    }catch (err) {
      toast.error('Invalid email or password' + err);
    }
  }    

useEffect(()=>{
  !userInfo ? navigate('/sign_in') : userInfo ? navigate('/shipping-address'): navigate('/')
  
},[navigate, userInfo])

  return(
   <Container  maxWidth='sm' sx={{ marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
              <Typography variant="h3" 
               sx={{ maxWidth: '450px',textAlign: 'center', height: '10%', alignItems: 'center', pt:2  }}>
                IS onlineSHOP</Typography>

     <Grid container >
        <Grid item xs={12} sx={{ mt: '2%'  }} >
          <Box sx={{maxWidth: '450px', alignItems: 'center',border: '1px solid gray', borderRadius: '5px' ,
          background: 'white', height: 'auto' }}>
              <Box sx={{py:3, px: 5 }}>
                  <Typography sx={{mb: 2}} variant="h4">
                  Sign-In
                  </Typography>
                  
                  <form onSubmit={formsubmitHandler}>
                    <label ><strong >Email </strong></label>
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setEmail(e.target.value)} 
                  placeholder='Enter Email...'  name="email" label="" type="email" autoFocus={true}  variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setPassword(e.target.value)} 
                    name="password" label="" placeholder='Enter Password...' type="password"   variant="standard" />
                    <Button style={{border: 2, background: '#ffc000', width: '100%', color: 'black'}}
                    type="submit">Continue</Button>
                    </form>
                     
                     <Typography component="p" sx={{mt:4}}>
                      By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                     </Typography>

                        <div>
      <Box mt='1'>
        New Customer? { ' '}
      <Link to='/sign_up' >Create your Account!</Link>
      </Box>
      
    </div>                  
              </Box>
          </Box>
        </Grid>
        
        
        </Grid>   


   </Container>

    )
}

export default Signin;