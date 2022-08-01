import React, { useContext, useEffect, useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Grid,Container, Box, Typography, TextField, Button } from '@mui/material'
import { toast } from 'react-toastify'
import { Store } from '../../Store'

 const Uploadproduct = () => { 
  const navigate = useNavigate();


  const [name, setName]= useState('');
  const [slug, setSlug]= useState('');
  const [image, setImage]= useState('');
  const [color, setColor]= useState('');
  const [Fabric, setFabric]= useState('');
  const [brand, setBrand]= useState('');
  const [category, setCategory]= useState('');
  const [note, setNote]= useState('');
  const [price, setPrice]= useState('');
  const [countInStock, setCountInStock]= useState('');
  const [ratings, setRatings]= useState('');
  const [mtrs1, setMtrs1]= useState('');
  const [mtrs2, setMtrs2]= useState('');
  const [mtrs3, setMtrs3]= useState('');
  const [mtrs4, setMtrs4]= useState('');
  const [mtrs5, setMtrs5]= useState('');

  const { state, dispatch: ctxDispatch} = useContext(Store)
  const { userInfo } = state
  const formsubmitHandler=async (e)=>{
    e.preventDefault();
      console.log(name);
    try{
      const { data } = await axios.post('/api/admin/create', {
       name, slug, image, color, Fabric, brand, category, note, price, countInStock, ratings, Measurement:{
         mtrs1, mtrs2, mtrs3, mtrs4, mtrs5}

      });
      ctxDispatch({type: 'UPLOAD_PRODUCTS', payload: data})
      localStorage.setItem('upload-product', JSON.stringify(data));
      navigate('/upload-product');
      toast.success('Product saved.')
    }catch (err) {
      toast.error('Invalid email or password');
    }
  }
useEffect( ()=>{
if (userInfo === true){
  navigate('/');
}
},[navigate, userInfo]);
  return (
    <>
    <Container maxWidth="sm"  sx={{height: 'auto', marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
              <Typography variant="h3" 
               sx={{ maxWidth: '450px',textAlign: 'center', height: '10%', alignItems: 'center', pt:2  }}>
                ISonlineSHOP</Typography>

     <Grid container >
        <Grid item xs={12} sx={{ mt: '2%'  }} >
          <Box sx={{maxWidth: '450px', alignItems: 'center',border: '1px solid gray', borderRadius: '5px' ,
          background: 'white', height: 'auto' }}>
              <Box sx={{py:3, px: 5 }}>
                  <Typography sx={{mb: 2}} variant="h4">
                  Upload New Products
                  </Typography>
                  
                  <form onSubmit={formsubmitHandler} >
                    <label ><strong >Enter new Products</strong></label>
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setName(e.target.value)} 
                  placeholder='Enter Name...'  name="name" label=""  autoFocus={true}  variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setSlug(e.target.value)} 
                  placeholder='Enter slug'  name="slug" label="" type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setImage(e.target.value)} 
                    name="image" label="" placeholder='Enter image path' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setColor(e.target.value)} name="color" label="" placeholder='Product Color' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setFabric(e.target.value)} name="Fabric" label="" placeholder='product Fabric' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setBrand(e.target.value)} name="brand" label="" placeholder='Product Brand' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setCategory(e.target.value)} name="category" label="" placeholder='Product Category' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setNote(e.target.value)} name="note" label="" placeholder='Product note' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setPrice(e.target.value)} name="price" label="" placeholder='Product price' type="number"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setRatings(e.target.value)} name="ratings" label="" placeholder='Product Ratings 1-5 only' type="number"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setCountInStock(e.target.value)} name="countInStock" label="" placeholder='Product Quantity' type="number"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setMtrs1(e.target.value)} name="mtrs1" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setMtrs2(e.target.value)} name="mtrs2" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setMtrs3(e.target.value)} name="mtrs3" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setMtrs4(e.target.value)} name="mtrs4" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
                    <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>setMtrs5(e.target.value)} name="mtrs5" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
                    <Button style={{border: 2, background: '#ffc000', width: '100%', color: 'black'}}
                    type="submit">Continue</Button>
                    </form>
                     
                     
                        <div>

      
    </div>                  
              </Box>
          </Box>
        </Grid>
        
        
        </Grid>   
        
    </Container>
        </>
  )
}
export default Uploadproduct;