import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Store } from "../../Store";

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };

    case "FETCH_SUCCES":
      return {
        ...state,
        loading: false,
        updateproduct: action.payload,
        error: "",
      };

    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const OrderHistory = (props) => {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;
  const [{ loading, error, updateproduct }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(
          `/api/products`
          // { headers: { Authorization: `Bearer ${userInfo.token}`}}
        );
        dispatch({ type: "FETCH_SUCCES", payload: data });
        // setHistoryData(data);
        console.log(data);
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [userInfo]);

  // const editeHandler=()=>{
  // navigate(`/edit-product${updateproduct._id}`)
  // }
  // function updateHandler(_id){
  //   navigate('/update-product'+_id)
  // }

  return loading ? (
    <div>loading....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <>
      <Box
        sx={{ marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}
      >
        <Typography variant="h5"> order History</Typography>
        <Container maxWidth="lg">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Images</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Stocks</TableCell>
                  <TableCell align="right">Prices</TableCell>
                  <TableCell align="right">Ratings</TableCell>
                  <TableCell align="right">Edit</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {updateproduct.map((order) => (
                  <TableRow
                    key={order._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {order._id.slice(13)}
                    </TableCell>
                    <TableCell align="right">
                      <img src={order.image} width="50px" alt={order.slug} />
                    </TableCell>
                    <TableCell align="right">{order.name}</TableCell>
                    <TableCell align="right">{order.countInStock}</TableCell>
                    <TableCell align="right">{order.price}</TableCell>
                    <TableCell align="right">{order.ratings}</TableCell>
                    <TableCell align="right" sx={{ cursor: "pointer" }}>
                      <Link to="">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </TableCell>
                    <TableCell align="right" sx={{ cursor: "pointer" }}>
                      <span>remove</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </>
  );
};

export default OrderHistory;
