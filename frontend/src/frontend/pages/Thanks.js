import { Container, Divider, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Store } from '../../Store';

const Thanks =()=>{

const {state}=useContext(Store);
const {cart, userInfo}=state;

    return (
    <Container maxWidth="md"  sx={{height: 'auto', marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
              <Typography  variant="h3" 
               sx={{ textAlign: 'center', color: '#ffc000' ,height: '10%', alignItems: 'center', pt:2  }}>
                Your order is Placed!</Typography>
<Divider></Divider>
<Typography sx={{my:2}}>
    Hi {userInfo.name},
    <br/>
Thank you for ordering
    <br/>
We're excited for you to receive your order and will notify you once it's on its way. If you have ordered from multiple 
sellers, your items will be delivered in separate packages. We hope you had a great shopping experience!.
</Typography>
<Divider></Divider>
<Typography sx={{my:2}} component="div">

    <strong >Delivery Detail</strong>
    <br/>
    <br/>
      <strong >Name:</strong>    <span style={{paddingLeft: '60px'}}> {userInfo.name}</span><br/>  
      <strong sx={{marginLeft: '60px'}}>Address:</strong><span style={{paddingLeft: '40px'}}> {cart.shippingAddress.fname}
      ,{cart.shippingAddress.address},{cart.shippingAddress.city},{cart.shippingAddress.postal}, {cart.shippingAddress.country}</span><br/>  
      <strong sx={{marginright: '60px'}}>E-mail:</strong><span style={{paddingLeft: '60px'}}>{userInfo.email}</span><br/>  

</Typography>

</Container>
    )
}

export default Thanks;