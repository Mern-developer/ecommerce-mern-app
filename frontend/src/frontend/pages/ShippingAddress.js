import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Store } from "../../Store";

export const ShippingAddress = () => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  const [fname, setFname] = useState(shippingAddress.fname || "");
  const [address, setAddress] = useState(shippingAddress.address || "");
  const [city, setCity] = useState(shippingAddress.city || "");
  const [postal, setPostal] = useState(shippingAddress.postal || "");
  const [country, setCountry] = useState(shippingAddress.country || "");

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fname,
        address,
        city,
        postal,
        country,
      },
    });
    localStorage.setItem(
      "shippingAddress",
      JSON.stringify({ fname, address, city, postal, country })
    );
    navigate("/payment");
  };

  console.log(shippingAddress);
  return (
    <>
      <Box
        sx={{ marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}
      >
        <Typography variant="h4" textAlign="center" component="p">
          Shipping Address
        </Typography>
        <Container maxWidth="sm">
          <form onSubmit={submitHandler}>
            <TextField
              sx={{ width: "100%", mb: 2 }}
              id="standard-basic"
              label="fullName"
              variant="standard"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              required
            />
            <TextField
              sx={{ width: "100%", mb: 2 }}
              id="standard-basic"
              label="address"
              variant="standard"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <TextField
              sx={{ width: "100%", mb: 2 }}
              id="standard-basic"
              label="city"
              variant="standard"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <TextField
              sx={{ width: "100%", mb: 2 }}
              id="standard-basic"
              label="postal"
              variant="standard"
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              required
            />
            <TextField
              sx={{ width: "100%", mb: 2 }}
              id="standard-basic"
              label="country"
              variant="standard"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <Button
              sx={{ border: 2, background: "#ffc000", color: "black" }}
              type="submit"
              variant="contained"
            >
              Continue
            </Button>
          </form>
        </Container>
      </Box>
    </>
  );
};
