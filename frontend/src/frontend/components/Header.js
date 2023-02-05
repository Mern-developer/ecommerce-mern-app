import React, {  useContext, useState } from "react";
import {

  AppBar,
  Badge,
  Box,
  Button,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  // ExpandMore,
  MenuOpen,
  Person,
  // SendTimeExtension,
  ShoppingCartOutlined,
  ArrowRightAltRounded,
} from "@mui/icons-material";
import { Store } from "../../Store";
import {  useNavigate } from "react-router-dom";



const Header = () => {
const navigate = useNavigate();
  const [anchorE1, setAnchorE1] = useState(null);
  const open = Boolean(anchorE1);
  const handleClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  const signHandler=()=>{
    navigate('/sign_in');
}
const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const { state , dispatch: ctxDispatcher}= useContext(Store);
const { cart , userInfo }=state;
console.log(cart);
  
const signoutHandler=()=>{
  ctxDispatcher({type: "SIGN_OUT"})
  localStorage.removeItem('userInfo');
  localStorage.removeItem('shippingAddress');
  navigate('/');
}  

const OrderhistoryHandler=()=>{
  navigate('/user-history')
}

const shoppingCart=()=>{
  navigate('/shopping-cart');
}
const uploadproductHandler=()=>{
  navigate('/upload-product')
}
const uploadproductHandler1=()=>{
  navigate('/update-product')
}

const gotoHome=()=>{navigate('/');}
const gotoHome1=()=>{navigate('/catalogues');}
const gotoHome2=()=>{navigate('/catal-gull-ahmed');}
const gotoHome3=()=>{navigate('/catal-jdot');}
const gotoHome4=()=>{navigate('/catal-watches');}

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#404040" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuOpen sx={{ color: "white" }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box width="250px" textAlign="left" role="presentation">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  pl: 1,
                  background: "#404040",
                  width: "250px",
                  lineHeight: "50px",
                  color: "white",
                  height: "50px",
                }}
              >
                <Person />
                {userInfo ? userInfo.name : (<Button sx={{color: 'white'}} onClick={signHandler}>SignIn</Button>) }
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  pl: 1,
                  mt: 2,
                  mb: 2,
                  fontSize: "20px",
                }}
              >
                Products
              </Typography>
              <ListItemButton  onClick={gotoHome1} sx={{ mt: 1 }}>
                <ListItemIcon>
                  <ArrowRightAltRounded />{' '}Nishatlinen
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton  onClick={gotoHome2} sx={{ mt: 1 }}>
                <ListItemIcon>
                  <ArrowRightAltRounded />{' '} Alkarams
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton  onClick={gotoHome3} sx={{ mt: 1 }}>
                <ListItemIcon>
                  <ArrowRightAltRounded />{' '} Junaid Jamshed
                </ListItemIcon>
              </ListItemButton>

              <ListItemButton  onClick={gotoHome4} sx={{ mt: 1 }}>
                <ListItemIcon>
                  <ArrowRightAltRounded />{' '}Watches
                </ListItemIcon>
              </ListItemButton>
             
            </Box>
          </Drawer>

          <Typography onClick={gotoHome} sx={{ fontWeight: "bold" }}> ISonlineSHOP</Typography>
                       {userInfo ? (
            <span>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Tooltip title="sign In">
              <Typography sx={{ color: "white", fontSize: "10px" }}>
              {userInfo.name}
              </Typography>
            </Tooltip>
          </Button>
            {userInfo.email ==  'fari-abbasi@outlook.com'  ? (<Menu
              id="basic-menu"
              anchorEl={anchorE1}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
            <MenuItem onClick={()=> { handleClose(); OrderhistoryHandler(); }} >Order History Admin</MenuItem>
            <MenuItem onClick={()=> { handleClose(); uploadproductHandler(); }} >Upload new prduct</MenuItem>
            <MenuItem onClick={()=> { handleClose(); uploadproductHandler1(); }} >Update product</MenuItem>
                   <MenuItem onClick={signoutHandler} >Logout</MenuItem> 
          </Menu>) : (
            <Menu
              id="basic-menu"
              anchorEl={anchorE1}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
            <MenuItem onClick={()=> { handleClose(); OrderhistoryHandler(); }} >Order History user</MenuItem>
            <MenuItem onClick={signoutHandler} >Logout</MenuItem> 
          </Menu>
           )}
            
           </span> 
              ) : (

              <span>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Tooltip title="sign In">
                  <Typography sx={{ color: "white", fontSize: "10px" }}>
                    Account
                  </Typography>
                </Tooltip>
              </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorE1}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
            <MenuItem onClick={()=>{handleClose(); signHandler();}}>SignIn</MenuItem>
            <MenuItem onClick={handleClose}>SignUp</MenuItem> 
          </Menu>
          </span>
              )}
            
          
          

          <Button aria-label="cart" sx={{ marginLeft: "auto" }} onClick={shoppingCart}>
            {cart.cartItems.length > 0 ? 
            (<Badge badgeContent={cart.cartItems.length} color="secondary">
              <ShoppingCartOutlined sx={{ fontSize: "35px", color: 'red' }} />
            </Badge>) : (<Badge badgeContent={cart.cartItems.reduce((a, c) => a + c.quantity, 0)} color="secondary">
              <ShoppingCartOutlined sx={{ fontSize: "35px", color: 'red' }} />
            </Badge>)
            }
          </Button>
          <Typography component={"span"}>

            </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
