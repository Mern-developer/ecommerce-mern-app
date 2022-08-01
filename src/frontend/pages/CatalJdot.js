import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, FormControl, Grid, InputLabel, MenuItem, Rating, Select, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import  Ratings from '../components/Ratings';

const reducer=(state, action)=>{
switch (action.type) {
  case "FETCH_REQUEST":
    return {...state, loading: true};    
  
    case "FETCH_SUCCESS":
    return {...state, loading: false, products: action.payload};    
  
    case "FETCH_FAIL":
    return {...state,  loading: true, error: action.payload};    

  default:
    return state;  
}
}


 const Cataljdot=()=>{
  const [valueR, setValueR] = useState(4);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };    


const [{loading, error, products}, dispatch]=useReducer(reducer, {
  products: [],
  loading: true,
  error: '',
});


 useEffect(()=>{
    const fetchData=async()=>{
      try{
        dispatch({typr: "FETCH_REQUEST"});
        const result = await axios.get('/api/products')
        const nishatPro1 = result.data.filter( x=> x.brand === 'JDot');
        console.log(nishatPro1);
        dispatch({type: "FETCH_SUCCESS", payload: nishatPro1});
  }catch(err){
        dispatch({type: "FETCH_SUCCESS", error: err.message});

  }

};
fetchData();
},[])



return (
  <Container maxWidth='xl' sx={{ marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
    { loading ? (<div>Loading....</div>) : error ? (<div>{error}</div>):(
        <Box>
 <Grid container>
        <Grid item sm={2} sx={{ display: { md: "block", xs: "none" } }}>
          <Typography
            sx={{ fontSize: "16px", mb: 1, color: "black", pl: 1 }}
          ></Typography>
          <FormControl sx={{ width: "80%", mt: 2, mb: 1 }}>
            <InputLabel id="demo-simple-select-label">Featured</InputLabel>
            <Select
              variant="standard"
              labelId="demo-simple-select-labelxx"
              id="demo-simple-select"
              value={age}
              label="Sort by:"
              onChange={handleChange}
            >
              <MenuItem value="low">Sort by: Price: Low to High</MenuItem>
              <MenuItem value="high">Sort by: Price: High to Low</MenuItem>
              <MenuItem value="avg">Sort by: AVg. Cus Review</MenuItem>
              <MenuItem value="newArrival">Sort by: Newest Arrivals</MenuItem>
            </Select>
          </FormControl>
          <Typography sx={{ fontSize: "16px", mb: 1, color: "black", pl: 1 }}>
            <strong>Avg. Customer Review</strong>
          </Typography>
          <Link to="#" underline="none" >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              <Rating
                name="read-only"
                readOnly
                value={valueR}
                onChange={(event, newValue) => {
                  setValueR(newValue);
                }}
              />
              <span
                style={{
                  fontSize: "15px",
                  marginLeft: "5px",
                  color: "black",
                }}
              >
                {" "}
                & Up
              </span>
            </Box>
          </Link>
          <Link to="#" underline="none">
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              <Rating
                name="read-only"
                readOnly
                value={valueR - 1}
                onChange={(event, newValue) => {
                  setValueR(newValue);
                }}
              />
              <span
                style={{
                  fontSize: "15px",
                  marginLeft: "5px",
                  color: "black",
                }}
              >
                {" "}
                & Up
              </span>
            </Box>
          </Link>
          <Link to="#" underline="none">
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              <Rating
                name="read-only"
                readOnly
                value={valueR - 2}
                onChange={(event, newValue) => {
                  setValueR(newValue);
                }}
              />
              <span
                style={{
                  fontSize: "15px",
                  marginLeft: "5px",
                  color: "black",
                }}
              >
                {" "}
                & Up
              </span>
            </Box>
          </Link>
          <Link to="#" underline="none">
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "5px",
              }}
            >
              <Rating
                name="read-only"
                readOnly
                value={valueR - 3}
                onChange={(event, newValue) => {
                  setValueR(newValue);
                }}
              />
              <span
                style={{
                  fontSize: "15px",
                  marginLeft: "5px",
                  color: "black",
                }}
              >
                {" "}
                & Up
              </span>
            </Box>
          </Link>
          <Typography
            sx={{ fontSize: "16px", mb: 1, mt: 2, color: "black", pl: 1 }}
          >
            <strong>Featured Brands</strong>
          </Typography>
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <Link
              to="#"
              underline="none"
              sx={{ color: "black", ml: 1, pb: 0.5 }}
            >
              Nishat linen
            </Link>
            
          </Box>
          <Typography
            sx={{
              fontSize: "16px",
              mb: 1,
              mt: 2,
              color: "black",
              pl: 1,
              pb: 0.5,
            }}
          >
            <strong> </strong>
          </Typography>
          <Link to="#" underline="none" sx={{ color: "black", ml: 1, pb: 0.5 }}>
            Nishat linen
          </Link>
        </Grid>
        <Grid item sm={10} sx={{ display: "flex-row" }}>
          {/* main product display */}

          <Typography sx={{ mt: 2 }}>{products.length} RESULTS</Typography>
          <Grid container sx={{ mt: 2 }} spacing={1}>
            
              { products.map((x)=>{
                  return(
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3} key={x.slug}
                  >
                    <Card >
                      <CardActionArea>
                        <CardMedia
                          sx={{ objectFit: "cover" }}
                          component="img"
                          height="250"
                          image={x.image}
                          alt={x.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h6" component="div">
                          {x.name}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="text.secondary"
                          >
                          <Ratings reviews={x.numReviews} Ratings={x.ratings} /> 
                          </Typography>
                          
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="text.secondary"
                          >
                            <strong>Pkr:</strong>{' '}{x.price} 
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="body2"
                            color="text.secondary"
                          >
                            <strong>Category:</strong>{' '}{x.category} 
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Link to={`/catal-jdot/${x.slug}`}>
                          Buy Now
                        </Link>
                      </CardActions>
                    </Card>

                  </Grid>
                        )
                    })}

          </Grid>
        </Grid>
      </Grid>


            </Box>
            )}
        </Container>



    )

}

export default Cataljdot;