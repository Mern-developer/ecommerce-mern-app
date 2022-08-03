import { Button, Card, CardActionArea, CardActions, CardContent, Container, Divider, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../../Store';
// import  getStripe  from '../components/getStripe'

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE_REQUEST":
      return { ...state, loading: true };

    case "CREATE_SUCCESS":
      return { ...state, loading: false };

    case "CREATE_FAIL":
      return { ...state, loading: false };

    default:
      return state;
  }
};


export const Placeorder=()=>{
const navigate = useNavigate();
const [{loading}, dispatch]=useReducer(reducer, {
  loading: false,
})
const { state  }= useContext(Store);

const { cart, userInfo } = state
    
 cart.itemsPrice = cart.cartItems.reduce((a,c )=> a + c.quantity * c.price, 0);
 cart.shippingPrice = cart.itemsPrice > 5000 ? 0 : 100 ;
 cart.taxPrice = cart.itemsPrice * 0.15;
 cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

useEffect( ()=>{
if(!userInfo){
    navigate('/')
}
},[navigate,userInfo ])


const placeOrderhandler=async()=>{
  try{
const { data } =await axios.post('/api/orders', {
  orderItems: cart.cartItems,
  shippingAddress: cart.shippingAddress,
  paymentmethod: cart.paymentmethod,
  itemsPrice: cart.itemsPrice,
  taxPrice: cart.taxPrice,
  totalPrice: cart.totalPrice,
},
{
  headers: { authorization: `Bearer ${userInfo.token}`,},
});
dispatch({type: "CART_CLEAR"});
toast.success('Your order received!');
dispatch({type: "CREATE_SUCCESS"});
localStorage.removeItem('storeItem');
navigate('/check-out')
}catch(err){
    dispatch({ type: 'CREATE_FAIL'});
    toast.error('Error ocurred' + err.message);
  }
}








return(
    <Container maxWidth="lg"  sx={{height: 'auto', marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
              <Typography  variant="h3" 
               sx={{ maxWidth: '450px',textAlign: 'center', height: '10%', alignItems: 'center', pt:2  }}>
                Place Order </Typography>
     <Grid container spacing={6}>
                <Grid item xs={12} sm={8}>
                    
             <Card sx={{ maxWidth: '100%' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Shipping
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Name:</strong> {cart.shippingAddress.fname}<br/>
            <strong>Address:</strong>{cart.shippingAddress.address}, {cart.shippingAddress.city}, {cart.shippingAddress.postal},{cart.shippingAddress.country}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link  to="/shipping-address">Edit</Link>
        </Button>
      </CardActions>
    </Card>

             <Card sx={{ maxWidth: '100%', mt:2 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Payment
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
             {
            cart.paymentmethod === 'cash on delievry' ? <> <strong>Method:</strong> {cart.paymentmethod}</> : 
            <> <strong>Method:</strong> {cart.paymentmethod} <br/><br/>
            <Button sx={{border: 2, background: '#ffc000', width: '20%'}} size='small'
         variant="contained" onClick='{handleCheckout}' disabled={cart.cartItems.length === 0} >
          pay now
          </Button>
             </>
           
           } <br/>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link  to="/payment">Edit</Link>
        </Button>
      </CardActions>
    </Card>

        <div>
                    {cart.cartItems.length === 0 ? (
                        <Card sx={{ maxWidth: '100%', height: '0px',mx: 'auto', mt: 3, p:9  , fontSize: 18}} >
No items in the cart! <strong>Go to home... </strong>
</Card>                    
                    ) : (
                         cart.cartItems.map( (item)=> {
                            return(
<Card sx={{ maxWidth: '100%', mt:2 }} key={item._id}>
              &nbsp;<strong>Items </strong> 
             <Grid container sx={{display: 'flex', alignItems: 'center', my:1}}>
                <Grid item xs={3} ml={3}>
                        <img src={item.image} alt={item.slug} width="60"/>
                </Grid>
                 <Grid item  xs={5}> {item.name}</Grid>   
                 <Grid item xs={1}>{item.quantity}</Grid>   
                 {/* <Grid item xs={4}>{item.price}</Grid>    */}
                </Grid>       
         &nbsp; <Link  to="/shopingcart">Edit</Link>
 
     </Card>

                 )
            }) 
            )  }
        </div>
                </Grid>
{/* order summary */}
  <Grid item  xs={12} sm={4}>
    <Card sx={{ maxWidth: '100%'}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Order Summary
          </Typography>
          <Grid container>
            <Grid item xs={6} sx={{mb:1}}>
            <strong>Items</strong>
            </Grid>
            <Grid item xs={6}>
              Pkr{' '}{cart.itemsPrice?.toFixed(2)}
            </Grid>
            <Divider></Divider>
            <Grid item xs={6} sx={{mb:1}}>
            <strong>Shipping</strong>
            </Grid> 
            <Grid item xs={6}>
              Pkr{' '}{cart.shippingPrice?.toFixed(2)}
            </Grid>
            <Grid item xs={6} sx={{mb:1}}>
            <strong>Tax</strong>
            </Grid>
            <Grid item xs={6}>
              Pkr{' '}{cart.taxPrice?.toFixed(2)}
            </Grid>
            
            <Grid item xs={6} sx={{mb:1}}>
            <strong>Order Total</strong>
            </Grid>
            <Grid item xs={6}>
              Pkr{' '}{cart.totalPrice?.toFixed(2)}
            </Grid>
            </Grid>
                  </CardContent>
             </CardActionArea>
        <CardActions>
        { cart.paymentmethod === 'cash on delievry' ?
        ( 
            <Button sx={{border: 2, background: '#ffc000'}} 
         variant="contained" onClick={placeOrderhandler} >
          Palce Order
          </Button>
           )
        : 
       
 ( 
    <Button sx={{border: 2, background: '#ffc000'}} 
         variant="contained" onClick={placeOrderhandler} disabled={cart.cartItems.length === 0} >
          pay now12
          </Button>
 )
       }  
              
             
              </CardActions>
    </Card>
                </Grid>
             </Grid>

</Container>
    )
}
      









// const handleCheckout= async ()=>{
      //     const stripe = await getStripe();
      //     const response = await axios.post('/payment/create-checkout-session', {
      //         headers: {
      //             'Content-Type': 'application/json',
      //             authorization: `Bearer ${userInfo.token}`
      //         },
      //         body:{cartItems: JSON.stringify(cart.cartItems)},
      //     });
      //     if(response.statusCode === 500) return;
      
      //     const data =await response.json();
      //     toast.loading('Redirect....');
      // stripe.redirectToCheckout({ sessionId: data.id});
      // }