import {  Button, Grid, Link,  Typography } from "@mui/material";
import React from "react";

 const Footer = () => {
  return (
    <footer>
      <Grid container  sx={{ background: "#404040" }}>
        <Button
          sx={{
            width: "100%",
            background: "#616161",
            "&:hover": { background: "#616161" },
            py: 2,
          }}
          variant="contained"
          disableElevation
        >
          Back to top
        </Button>
        <Grid container style={{marginLeft: '5%' }}>  
        <Grid item xs={12} md={3}>
          <Link to="#" underline="hover" color="white" sx={{fontWeight:'600'}}>
            <Typography variant="h6" >Get to know Us</Typography>
          </Link>
          <Link to="#"  underline="hover" color="white">
            <Typography>Careers</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>Blog</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>About Amazon</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>Investor</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link to="#" underline="hover" color="white" sx={{fontWeight:'600'}}>
            <Typography variant="h6" >Get to know Us</Typography>
          </Link>
          <Link to="#"  underline="hover" color="white">
            <Typography>Careers</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>Blog</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>About Amazon</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>Investor</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link to="#" underline="hover" color="white" sx={{fontWeight:'600'}}>
            <Typography variant="h6" >Get to know Us</Typography>
          </Link>
          <Link to="#"  underline="hover" color="white">
            <Typography>Careers</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>Blog</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>About Amazon</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>Investor</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <Link to="#" underline="hover" color="white" sx={{fontWeight:'600'}}>
            <Typography variant="h6" >Get to know Us</Typography>
          </Link>
          <Link to="#"  underline="hover" color="white">
            <Typography>Careers</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>Blog</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>About Amazon</Typography>
          </Link>
          <Link to="#" underline="hover" color="white">
            <Typography>Investor</Typography>
          </Link>
        </Grid>
        </Grid>


      </Grid>
    </footer>
  );
};
export default Footer;