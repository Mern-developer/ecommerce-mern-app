import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { Store } from '../../Store';


function reducer(state, action){
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: ''};
      
    case 'FETCH_SUCCES':
      return { ...state, loading: false, orders: action.payload , error: ''};
      
    case 'FETCH_FAIL':
      return { ...state, loading: false,  error: action.payload };
    default:
      return state;
  }
}

 const OrderHistory=()=>{

 const { state } = useContext(Store);
const {userInfo}= state;
const [{ loading, error, orders }, dispatch]=useReducer(reducer, {
    loading:  true,
    error: '',
})   

useEffect( ()=>{
const fetchData= async ()=>{
  try{
  dispatch({type: 'FETCH_REQUEST'})
const { data } = await axios.get(`/api/orders/getall`, 
{ headers: { Authorization: `Bearer ${userInfo.token}`}});
dispatch({type: 'FETCH_SUCCES', payload: data})
// setHistoryData(data);
console.log(data);
}catch(err){
dispatch({type:'FETCH_FAIL', payload: err.message})
}
};
fetchData();

},[ userInfo ])
    
    
    
    return(
        loading ? (<div>loading....</div>) : error ? (<div>{error}</div>): (

        
        <>
      <Box sx={{ marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
        <Typography variant='h5' > order History</Typography>
        <Container maxWidth='lg'>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">TOTAL</TableCell>
            <TableCell align="right">PAID</TableCell>
            <TableCell align="right">DELIVERED</TableCell>
            <TableCell align="right">DETAILS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell align="right">{order.createdAt.substring(0, 10)}</TableCell>
              <TableCell align="right">{order.totalPrice}</TableCell>
              <TableCell align="right">{order.isPaid ? order.paidAt: 'No'}</TableCell>
              <TableCell align="right">{order.isDelivered ? order.deliveredAt : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        </Container>





      </Box>
        </>
        )


    )
}

export default OrderHistory;