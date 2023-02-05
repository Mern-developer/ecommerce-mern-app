import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel } from "swiper";
import { Box } from '@mui/system';
import {Card, CardContent, Grid, ImageListItem, Typography } from '@mui/material';

 const BodyfrontHeader = () => {
    const draweritems ={
        drawerimages:[
          {
            img: 'https://m.media-amazon.com/images/I/61-8rBAD68L._SX3000_.jpg',
          },
          {
            img: 'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
          },
          {
            img: 'https://m.media-amazon.com/images/I/61BvxKSpy3L._SX3000_.jpg',
          },
          {
            img: 'https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg',
          },
          {
            img: 'https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg',
          }
        ],
          mainpageCard:[
            {
              title: "Women's Fashions",
              details:[             
                {subImage: '/images/Nishat/Embroidered-3pc.png'},
                {subImage: '/images/Nishat/Embroidered-3pc-02.png'}, 
                {subImage: '/images/Nishat/Embroidered-3pc-03.png'}, 
                {subImage: '/images/Nishat/Embroidered-3pc-04.png'} 
                ]
            }
         ],
         mainpageCard1:[
          {
                  title: "Men's Fashions",
                  details:[
                           {subImage: '/images/Gull_Ahmed/navy_formal_shirt.png'},
                           {subImage: '/images/jdot/ash-grey-blended-unstitched-kameez-shalwar-fabric-jjms-5_ash_grey.png'}
                           ,{subImage: '/images/Gull_Ahmed/multi_colored_checkered_formal_shirt_01.png'}
                           ,{subImage: '/images/Nishat/Embroidered-3pc.png'}
                  ]
          }
         ],
         mainpageCard2:[

               {
                 title: "Shops by Brands",
                 details:[
                   {subImage: '/images/watches/skmei-watch.png'},
                   {subImage: '/images/watches/louiswill-men.png'}, 
                   {subImage: '/images/watches/voomristwatch.png'}, 
                   {subImage: '/images/watches/louiswill-casuals.png'} 
                 ]
           }
         ],
         mainpageCard3:[
            {
              title: "Electronics Items",
              details:[
                   {subImage: '/images/Electronics/Samsung_Galaxy.png'},
                   {subImage: '/images/Electronics/realme_Narzo.png'}, 
                   {subImage: '/images/Electronics/real-me-Amoled.png'}, 
                 ]
           }
         ], 
         mainpageCard4:[
            {
              title: "Jdot Shalwar Kameez",
              details:[
                   {subImage: '/images/jdot/blue-blended-unstitched-kameez-shalwar-fabric-jjms-3_blue.png'},
                   {subImage: '/images/jdot/brown-blended-unstitched-kameez-shalwar-fabric-jjms-4_brown.png'}, 
                   {subImage: '/images/jdot/white-blended-unstitched-kameez-shalwar-fabric-jjms-2_white.png'}, 
                  {subImage: '/images/jdot/ash-grey-blended-unstitched-kameez-shalwar-fabric-jjms-5_ash_grey.png'}
                  ]
           }
         ] 
      }
        
        
return (
<>
<Box sx={{width: '100%', marginTop: '57px' }}>
<Grid container >
        <Grid item xs={12} sm={12}>
<Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel]}
        className="mySwiper"
      >
        { draweritems.drawerimages.map((x)=>(
        <SwiperSlide key={x.img}>
            <ImageListItem >
                   <img sx={{ height: '50px', width: '100%'}}
                        src={x.img} alt=""
                            loading="lazy"
                                />
            </ImageListItem>
        </SwiperSlide>
                            ))}
      </Swiper>
      </Grid>
      </Grid>
</Box>

    <Grid container >

       <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center'}} >
      <Box style={{margin: '9px', width: '350px'}}>
       <Grid container spacing={2} >
             {draweritems.mainpageCard.map((x)=> {
               return(
            <Grid  item xs={12} key={x.title}>
          <Card >
             <CardContent>
                <Typography  variant="h6" component="div">
                  {x.title}        
              </Typography>
          </CardContent>
    <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
         {
          x.details.map((subimage)=>{
            return(
              <div key={subimage.subImage} >
              <img src={subimage.subImage} alt="" loading="lazy"  width="167" /> 
              </div>)
                  })
                }         
                </Box>
              <Link to='/catalogues'>Shop Now</Link>  
                
        </Card>          
          </Grid>
          )
        })}     
        </Grid>
     </Box>
      <Box style={{margin: '5px', width: '350px'}}>
       <Grid container spacing={2} >
             {draweritems.mainpageCard1.map((x)=> {
               return(
            <Grid  item xs={12} key={x.title}>
          <Card >
             <CardContent>
                <Typography  variant="h5" component="div">
                  {x.title}        
              </Typography>
          </CardContent>
    <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
         {
          x.details.map((subimage)=>{
            return(
              <div key={subimage.subImage} >
              <img src={subimage.subImage} loading="lazy"  width="167" alt=""/> 
              </div>)
                  })
                }         
                </Box>
                           <Link to='/catal-gull-ahmed'>Shop Now</Link>  

                
        </Card>          
          </Grid>
          )
        })}     
        </Grid>
     </Box>
      <Box style={{margin: '5px', width: '350px'}}>
       <Grid container spacing={2} >
             {draweritems.mainpageCard2.map((x)=> {
               return(
            <Grid  item xs={12} key={x.title}>
          <Card >
             <CardContent>
                <Typography  variant="h5" component="div">
                  {x.title}        
              </Typography>
          </CardContent>
    <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
         {
          x.details.map((subimage)=>{
            return(
              <div key={subimage.subImage} >
              <img src={subimage.subImage} loading="lazy"  width="167" alt=""/> 
              </div>)
                  })
                }         
                </Box>
                             <Link to='/catal-watches'>Shop Now</Link>  

                
        </Card>          
          </Grid>
          )
        })}     
        </Grid>
     </Box>
      <Box style={{margin: '5px', width: '350px'}}>
       <Grid container spacing={2} >
             {draweritems.mainpageCard3.map((x)=> {
               return(
            <Grid  item xs={12} key={x.title}>
          <Card >
             <CardContent>
                <Typography  variant="h5" component="div">
                  {x.title}        
              </Typography>
          </CardContent>
    <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
         {
          x.details.map((subimage)=>{
            return(
              <div key={subimage.subImage} >
              <img src={subimage.subImage} loading="lazy"  width="167" alt=""/> 
              </div>)
                  })
                }         
                </Box>
                              <Link to='/catal-mobile'>Shop Now</Link>  

                
        </Card>          
          </Grid>
          )
        })}     
        </Grid>
     </Box>
      <Box style={{margin: '5px', width: '350px'}}>
       <Grid container spacing={2} >
             {draweritems.mainpageCard4.map((x)=> {
               return(
            <Grid  item xs={12} key={x.title}>
          <Card >
             <CardContent>
                <Typography  variant="h5" component="div">
                  {x.title}        
              </Typography>
          </CardContent>
    <Box  sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
         {
          x.details.map((subimage)=>{
            return(
              <div key={subimage.subImage} >
              <img src={subimage.subImage} loading="lazy"  width="167" alt="" /> 
              </div>)
                  })
                }         
                </Box>
                             <Link to='/catal-jdot'>Shop Now</Link>  

                
        </Card>          
          </Grid>
          )
        })}     
        </Grid>
     </Box>
        </Box>   
      

</Grid>
</>
)            
 }
 export default BodyfrontHeader;
