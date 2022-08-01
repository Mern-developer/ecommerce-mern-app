import { Button, Checkbox, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Store } from '../../Store'

export const Payment=()=>{
        const navigate = useNavigate();
        const { state, dispatch: ctxDispatch} = useContext(Store);
        const { cart:{
            paymentmethod,
        }, userInfo
    }=state;
useEffect( ()=> {
if(!userInfo){
    navigate('/sign_in');
}
}, [navigate, userInfo]);
        const [paymentMethod, setpaymentMethod] = useState( paymentmethod || 'cash on delievry');
        const submitHandler=(e)=>{
            e.preventDefault();
            ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod});
            localStorage.setItem('paymentMethod', paymentMethod);
            navigate('/placeorder');
        }
    return(
        <>
            <Box sx={{ marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>

        <Container maxWidth="sm" sx={{height: 'auto'}}>
            <Typography variant='h4' sx={{mb:2}}>Payment Method</Typography>
            <form onSubmit={submitHandler}>
            <Checkbox  value="cash on delievry" checked={paymentMethod === 'cash on delievry'}
            onChange={(e)=> setpaymentMethod(e.target.value)} /> Cash on Delivery <br/>
             
                            <Checkbox  value='Stripe' checked={paymentMethod === 'Stripe'}
            onChange={(e)=> setpaymentMethod(e.target.value)} defaultChecked /> Stripe  <br/><br/>
          
                     <Button style={{border: 2, background: '#ffc000', color: 'black'}}
                            type="submit">Continue</Button>
            </form>



        </Container>
            </Box>
        </>
    )
}