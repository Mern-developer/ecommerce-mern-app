import { Box, Chip, Container, Divider, Grid, ImageListItem, Typography } from '@mui/material'
import React, { useContext, useEffect, useReducer } from 'react'
import { Link, useNavigate, useParams, } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import  Ratings  from '../components/Ratings.js';
import axios from "axios";
import { Store } from '../../Store.js';
import { toast } from 'react-toastify';

const reducer=(state, action)=>{
switch (action.type) {
  case "FETCH_REQUEST":
    return {...state, loading: true};    
  
    case "FETCH_SUCCESS":
    return {...state, loading: false, backendData: action.payload};    
  
    case "FETCH_FAIL":
    return {...state,  loading: true, error: action.payload};    

  default:
    return state;  
}
}


 const ProductDetailMobile =()=>{
  const navigate=useNavigate();  
  const params = useParams();
    const {slug}=params;

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    width: "380px",
  },
}));



const [{loading, error, backendData}, dispatch]=useReducer(reducer, {
  backendData: [],
  loading: true,
  error: '',
});


 useEffect(()=>{
    const fetchData=async()=>{
      try{
        dispatch({typr: "FETCH_REQUEST"});
        const result = await axios.get(`/api/products/slug/${slug}`)
        // const nishatPro1 = result.data.filter( x=> x.brand === 'JDot');
        // console.log(nishatPro1);
        dispatch({type: "FETCH_SUCCESS", payload: result.data});
  }catch(err){
        dispatch({type: "FETCH_SUCCESS", error: err.message});

  }

};
fetchData();
},[slug])
console.log(backendData);
const {state, dispatch: ctxDispatch} = useContext(Store);
const { cart } = state;
const addToCartHandler = async ()=>{
  const existItem = cart.cartItems.find((x) => x._id === backendData._id)
  const quantity = existItem ? existItem.quantity + 1 : 1;

  const { data } = await axios.get(`/api/products/${backendData._id}`)
  if (data.countInStock < quantity ){
    toast.error('Sorry, Product is out of stock');
  }
  ctxDispatch({type: "ADD_TO_CART", 
payload: {...backendData, quantity},
});
navigate('/shopping-cart')
}




return (
   <Container  maxWidth='xl' sx={{ marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
{loading ? (<div>Loading...</div>) : error ? (<div>{error}</div>):(  

<Box container sx={{ display: { md: "flex" }, my:3 }}>
            <Box>
              <Typography
                component={"div"}
                sx={{
                  display: {
                    md: "none",
                    xs: "block",
                    margin: "0",
                    width: "100%", marginBottom: "10px"
                  },
                }}
              >
                <Typography component={"p"} sx={{ marginBottom: "15px" }}>
                  {backendData.name}
                </Typography>
                <Ratings
                  Ratings={backendData.ratings}
                  reviews={backendData.numReviews}
                />
              </Typography>
              <Grid item textAlign="center">
                <ImageListItem sx={{ width: "350px" }}>
                  <img
                    src={backendData.image}
                    alt={backendData.name}
                    loading="lazy"
                  />
                </ImageListItem>
              </Grid>
            </Box>

            <Box>
              <Grid item sx={{ mx: 1 }}>
                <Typography
                  component={"div"}
                  sx={{ display: { sm: "block", xs: "none" } }}
                >
                  <Typography variant="h3" gutterBottom component="div">
                    {backendData.name}
                    
                  </Typography>
                  <Ratings
                    Ratings={backendData.ratings}
                    reviews={backendData.numReviews}
                  />
                  <Divider sx={{ mb: 1 }} />
  
                </Typography>
                <span style={{ fontSize: "20px", color: "#9e9e9e" }}>
                  List Price :
                </span>
                &nbsp;{backendData.price}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: "20px", color: "#9e9e9e" }}>
                  {" "}
                  Price :
                </span>
                &nbsp;{backendData.price}
                <br />
                <span
                  style={{
                    fontSize: "20px",
                    color: "#9e9e9e",
                    marginBottom: "15px",
                  }}
                >
                  {" "}
                  You Saved :
                </span>
                &nbsp;{backendData.price}
                <Typography
                  variant="span"
                  sx={{ mt: 2, fontSize: "19px" }}
                  gutterBottom
                  component="div"
                >
                  PRODUCT INFORMATION
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#9e9e9e" }}
                  gutterBottom
                >
                  {backendData.desc}
                </Typography>
                <p style={{ fontSize: "19px", fontWeight: "500" }}>
                  Detail
                  <br />
                  <span
                    style={{
                      fontSize: "17px",
                      marginBottomm: "-50px",
                      color: "#9e9e9e",
                      fontWeight: "400",
                    }}
                  >
                    Color: {backendData.color}
                  </span>
                                  </p>
                <div style={{ fontSize: "19px", fontWeight: "500" }}>
                Specfication:<br/>
                  {backendData.Specfic?.s_detail1}<br/>
                  {backendData.Specfic?.s_detail2}<br/>
                  {backendData.Specfic?.s_detail3}<br/>
                  {backendData.Specfic?.s_detail4}<br/>
                </div>
              <Typography
                  variant="span"
                  sx={{ mt: 2, fontSize: "14px" }}
                  gutterBottom
                  component="div"
                >
                  {backendData.note}
                </Typography>
              </Grid>
            </Box>
            <Box>
              <Grid container>
                <Grid item md={9} xs={12}>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: { md: { width: "400px" } } }}
                  >
                    <Root>
                      <Box
                        sx={{
                          border: 1,
                          borderRadius: "6px",
                          padding: "15px",
                          borderColor: "gray",
                        }}
                      >
                        <Typography
                          component={"div"}
                          sx={{ color: "red" }}
                          gutterBottom
                        >
                          Rs. {backendData.price}
                        </Typography>

                        <Typography component={"div"} gutterBottom>
                          <strong>Shipping Policy: </strong>Shipping Time:
                          Shipping time for order delivery within Pakistan is 7
                          working days and for outside Pakistan 15 working days.
                        </Typography>

                        <div>
                          <Typography component={"p"} sx={{ fontWeight: 600 }}>
                            Product Status:
                          </Typography>
                          {backendData.countInStock === 1
                            ? `${backendData.countInStock} 
                                  in Stock`
                            : backendData.countInStock <= 5 &&
                              backendData.countInStock >= 1
                            ? `${backendData.countInStock} pcs Left in stock`
                            : backendData.countInStock === 0
                            ? (<span style={{color: 'red',my:1}}>  Out of Stock</span>)
                            : `${backendData.countInStock} in stock`}
                        </div>

                        {backendData.countInStock === 1
                            ? (<span
                            onClick={addToCartHandler}>
                              <Chip
                                label="Add to Cart" 
                                sx={{
                                  borderRadius: "10px",
                                  width: "100%",
                                  color: "black",
                                  background: "#ffc000",
                                  cursor: "pointer",
                                  my: 2, 
                                  fontSize: "18px",
                                }}
                              />
                            </span>)
                            : backendData.countInStock <= 5 &&
                              backendData.countInStock >= 1
                            ? (<span
                            onClick={addToCartHandler}>
                              <Chip
                                label="Add to Cart" 
                                sx={{
                                  borderRadius: "10px",
                                  width: "100%",
                                  color: "black",
                                  background: "#ffc000",
                                  cursor: "pointer",
                                  my: 2, 
                                  fontSize: "18px",
                                }}
                              />
                            </span>)
                            : backendData.countInStock === 0
                            ? ' '
                            : (<span
                            onClick={addToCartHandler}>
                              <Chip
                                label="Add to Cart" 
                                sx={{
                                  borderRadius: "10px",
                                  width: "100%",
                                  color: "black",
                                  background: "#ffc000",
                                  cursor: "pointer",
                                  my: 2, 
                                  fontSize: "18px",
                                }}
                              />
                            </span>)}
                           
                                                <span >
                          <Chip
                            label="Buy Now"
                            sx={{
                              borderRadius: "10px",
                              width: "100%",
                              color: "black",
                              background: "#FF9C33",
                              cursor: "pointer",
                              fontSize: "18px",
                            }}
                          />
                        </span>
                        <Typography
                          component={"div"}
                          sx={{
                            color: "gray",
                            fontSize: "20px",
                            padding: "20px",
                          }}
                        >
                          <i className="fa-solid fa-lock"></i>
                          <span>&nbsp;&nbsp;Secure transaction</span>
                          <Typography
                            component={"p"}
                            sx={{ color: "gray", fontSize: "15px", my: 1 }}
                          >
                            <strong>Your transaction is secure</strong>
                            <br />
                            We work hard to protect your security and privacy.
                            Our payment security system encrypts your
                            information during transmission. We don’t share your
                            credit card details with third-party sellers, and we
                            don’t sell your information to others.
                          </Typography>
                        </Typography>

                        <i className="fa-solid fa-person-carry-box"></i>
                      </Box>
                    </Root>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>



)}
   </Container>



    )
}
export default ProductDetailMobile;