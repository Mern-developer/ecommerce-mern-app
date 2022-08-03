import { Box, Button, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import { Store } from '../../Store';
import axios  from 'axios';
import { toast } from 'react-toastify';

const Rootcarts = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    display: "block",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const Rootcarts_inner = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
    fontSize: "15px",
    marginLeft: "-6px",
  },
}));
const Shoppingcart = ()=>{
const navigate=useNavigate();
const { state, dispatch: ctxDispatch} = useContext(Store);
const { cart: {
    cartItems
}}=state;

const updateCartHandler= async(item, quantity)=>{
    const { data } =await axios.get(`/api/products/${item._id}`);
if(data.countInStock < quantity){
    toast.error('Sorry, product is out of Stock!')
    return;
}
ctxDispatch({
    type: "ADD_TO_CART", 
    payload: {...item, quantity}
})
}

const removeCartItem= (item)=>{
ctxDispatch({
    type: "REMOVE_FROM_CART",
    payload: item
});
}
const checkoutHandler=()=>{
navigate('/sign_in')
}

return(
<Container  maxWidth='xl' sx={{ marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
  <Grid container>
        <Grid item xs={12} md={8} sx={{ p: 3 }}>
          <Box sx={{ background: "white" }}>
            <Typography variant="h4" sx={{ px: 2, pt: 2, mt: 1 }}>
              Shopping cart
            </Typography>
            <Rootcarts>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-End",
                  marginTop: "-10px",
                  mx: 7,
                }}
              >
                price
              </Typography>
            </Rootcarts>
            <Divider></Divider>
            {cartItems.length === 0 ? (
              <Typography variant="h6" sx={{ m: 5 }}>
                <center>
                  Cart is Empty!{" "}
                  <Link
                    to="/"
                    style={{ fontSize: "15px", textDecoration: "none" }}
                  >
                    Go to Shopping...
                  </Link>
                </center>
              </Typography>
         ) : (
              <Box>
                {cartItems.map((item) => {
                  return (
                    <Box
                      key={item._id}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        my: 2,
                        mx: 1,
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <Box sx={{ mr: 1 }}>
                          <img src={item.image} width="110px" alt="" />
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ mb: -1 }}>
                            {item.name}
                          </Typography>
                          <Rootcarts_inner>
                            <Typography variant="p">
                              Pkr:{""}
                              {item.price}
                            </Typography>
                          </Rootcarts_inner>
                          <Typography component={"div"}>
                            {item.category}
                          </Typography>
                          <Typography component={"div"}>
                            By {item.brand}
                          </Typography>
                          <Typography component={"div"}>
                            {item.countInStock === 0 ||
                             item.countInStock > 1 ? ( 
                              <span style={{ color: "green" }}>In Stock</span>
                            ) : ( 
                              <span style={{ color: "red" }}>Out of Stock</span>
                             )} 
                          </Typography>
                          <IconButton
                          onClick={()=> updateCartHandler(item, item.quantity - 1)}
                            size="small"
                            disabled={item.quantity === 1}
                          >
                            <i className="fas fa-minus-circle"></i>
                          </IconButton>{" "}
                          <span>{item.quantity}</span>
                          {""}
                          <IconButton
                          onClick={()=> updateCartHandler(item, item.quantity + 1)}
                            size="small"
                            disabled={item.quantity === item.countInStock}
                          >
                            <i className="fas fa-plus-circle"></i>
                          </IconButton>
                          <span>|</span>{" "}
                          <IconButton onClick={()=>removeCartItem(item)}
                            title="Delete Item" sx={{cursor: 'pointer'}}> 
                            <i className="fa-solid fa-trash-can" style={{fontSize: '15px'}}></i></IconButton>
                          <span>|</span>{" "}
                          <IconButton onClick={()=>removeCartItem(item)}
                            title="Edit Item" sx={{cursor: 'pointer' }}> 
                           <Link to={`/catalogues/${item.slug}`} >
                           <i className="fa-solid fa-pen-to-square" style={{fontSize: '15px'}}></i>
                           </Link>
                           </IconButton>
                        </Box>
                      </Box>
                      <Box>
                        <Rootcarts>
                          <Typography variant="h6">
                            Pkr:
                            {item.price}
                          </Typography>
                        </Rootcarts>
                      </Box>
                    </Box>
                  );
                 })} 
              </Box>
             )} 
            <Divider sx={{ mt: 3 }}></Divider>
            <Typography
              style={{
                fontSize: "18px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              Subtotal: ( {cartItems.length === 1 ? 
              `${cartItems.length} item`: cartItems.length > 1 
              ? `${cartItems.length} items`: 'item' } ):{" "}
              <strong style={{ marginRight: "20px" }}>
                Pkr {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} 
              </strong>{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ pr: 2, py: 2 }}>
          <Box sx={{ background: "white", height: "20vh", m: 2, p: 4 }}>
            <Typography component={"span"}>
              Cart Subtotal{" "}
              {cartItems.length === 1
                ? (`(${cartItems.length} item)`)
                : cartItems.length > 1
                ? (`(${cartItems.length} items)`)
                : "(item)"}{" "}
              : {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
            </Typography>

            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
               {cartItems.length === 0 ? 
              'Have some Shopping!' : 
              <Button onClick={checkoutHandler}
              style={{ background: "#ffc000", color: "black", border: 2 }}
              >
                Proceed to checkout
              </Button> 
              }
            </Box>
          </Box>
        </Grid>
      </Grid>


</Container>

    )
}

export default Shoppingcart;