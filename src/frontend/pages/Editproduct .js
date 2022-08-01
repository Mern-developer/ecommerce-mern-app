// import React, { useContext, useEffect, useReducer, useState } from 'react'
// import { Link,  useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'
// import { Grid,Container, Box, Typography, TextField, Button } from '@mui/material'
// import { toast } from 'react-toastify'
// import { Store } from '../../Store'



// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };

//     case "FETCH_SUCCESS":
//       return { ...state, loading: false, editpro: action.payload };

//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

//  const Editproduct = () => { 
//   const navigate = useNavigate();
//   const params = useParams();
//   const {slug: editId}= params;
//   const { state, dispatch: ctxDispatch} = useContext(Store)
//   const { userInfo, uploadproduct } = state;
// console.log(typeof userInfo);
//   // const [name, setName]= useState('');
//   // const [slug, setSlug]= useState('');
//   // const [image, setImage]= useState('');
//   // const [color, setColor]= useState('');
//   // const [Fabric, setFabric]= useState('');
//   // const [brand, setBrand]= useState('');
//   // const [category, setCategory]= useState('');
//   // const [note, setNote]= useState('');
//   // const [price, setPrice]= useState('');
//   // const [countInStock, setCountInStock]= useState('');
//   // const [ratings, setRatings]= useState('');
//   // const [mtrs1, setMtrs1]= useState('');
//   // const [mtrs2, setMtrs2]= useState('');
//   // const [mtrs3, setMtrs3]= useState('');
//   // const [mtrs4, setMtrs4]= useState('');
//   // const [mtrs5, setMtrs5]= useState('');

// const [data, setData]=useState({
//   name: "", slug:"",image:"",color:"",Fabric:"",brand:"",category:"",note:"",price:"",
//   countInStock:"",ratings:"",mtrs1:"",mtrs2:"",mtrs3:"",mtrs4:"",mtrs5:"",
// })

// console.log(data.price);
// const [{ loading, error, editpro }, dispatch] = useReducer(reducer, {
//     editpro: [],
//     loading: true,
//     error: "",
//   });

//   // const formsubmitHandler=async (e)=>{
//   //   e.preventDefault();
//   //   try{
//   //     const { data } = await axios.put(`/api/admin/edit${id}`, {
//   //      name, slug, image, color, Fabric, brand, category, note, price, countInStock, ratings, Measurement:{
//   //        mtrs1, mtrs2, mtrs3, mtrs4, mtrs5}

//   //     });
//   //     ctxDispatch({type: 'UPLOAD_PRODUCTS', payload: data})
//   //     navigate('/');
//   //     toast.success('Product updated.')
//   //     console.log(data);
//   //   }catch (err) {
//   //     toast.error('Invalid email or password');
//   //   }
//   // }

// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         dispatch({ typr: "FETCH_REQUEST" });
//         const  result  = await axios.get(`/api/products/slug/${editId}`)
//   console.log(result);

//         dispatch({ type: "FETCH_SUCCESS", payload: result.data });
//         setData(result.data)
//       } catch (err) {
//         dispatch({ type: "FETCH_SUCCESS", error: err.message });
//       }
//     };
//     fetchData();
//   }, [editId]);
//   console.log(editpro);






// return (
//     <>
//     <Container maxWidth="sm"  sx={{height: 'auto', marginTop: "70px", paddingLeft: "15px", marginBottom: "20px" }}>
//               <Typography variant="h3" 
//                sx={{ maxWidth: '450px',textAlign: 'center', height: '10%', alignItems: 'center', pt:2  }}>
//                 ISonlineSHOP</Typography>

//      <Grid container >
//         <Grid item xs={12} sx={{ mt: '2%'  }} >
//           <Box sx={{maxWidth: '450px', alignItems: 'center',border: '1px solid gray', borderRadius: '5px' ,
//           background: 'white', height: 'auto' }}>
//               <Box sx={{py:3, px: 5 }}>
//                   <Typography sx={{mb: 2}} variant="h4">
//                   Edit products
//                   </Typography>
                  
//                   <form onSubmit={'formsubmitHandler'} >
//                     <label ><strong >Enter new Products</strong></label>
//                     <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>changeHandler(e)} value={data.name}
//                   placeholder='Enter Name...'  name="name" label=""  autoFocus={true}  variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>changeHandler(e)} value={data.slug}
//                   placeholder='Enter slug'  name="slug" label="" type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}}  onChange={(e)=>changeHandler(e)} value={data.image}
//                     name="image" label="" placeholder='Enter image path' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.color} onChange={(e)=>changeHandler(e)} name="color" label="" placeholder='Product Color' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.Fabric} onChange={(e)=>changeHandler(e)} name="Fabric" label="" placeholder='product Fabric' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.brand} onChange={(e)=>changeHandler(e)} name="brand" label="" placeholder='Product Brand' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.category} onChange={(e)=>changeHandler(e)} name="category" label="" placeholder='Product Category' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.note} onChange={(e)=>changeHandler(e)} name="note" label="" placeholder='Product note' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.price} onChange={(e)=>changeHandler(e)} name="price" label="" placeholder='Product price' type="number"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.ratings} onChange={(e)=>changeHandler(e)} name="ratings" label="" placeholder='Product Ratings 1-5 only' type="number"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.countInStock} onChange={(e)=>changeHandler(e)} name="countInStock" label="" placeholder='Product Quantity' type="number"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.mtrs1} onChange={(e)=>changeHandler(e)} name="mtrs1" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.mtrs2} onChange={(e)=>changeHandler(e)} name="mtrs2" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.mtrs3} onChange={(e)=>changeHandler(e)} name="mtrs3" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.mtrs4} onChange={(e)=>changeHandler(e)} name="mtrs4" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
//                     <TextField  sx={{width: '100%', mb: 2}} value={data.mtrs5} onChange={(e)=>changeHandler(e)} name="mtrs5" label="" placeholder='Measuremt sub values' type="text"   variant="standard" />
//                     <Button style={{border: 2, background: '#ffc000', width: '100%', color: 'black'}}
//                     type="submit">update</Button>
//                     </form>
                     
                     
//                         <div>

      
//     </div>                  
//               </Box>
//           </Box>
//         </Grid>
        
        
//         </Grid>   
        
//     </Container>
//         </>
//   )
// }
// export default Editproduct;