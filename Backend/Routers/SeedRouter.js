import express from 'express';
import data from '../apis/productsApis.js';
import productModel from '../Models/parentsModel.js';
import userModel from '../Models/userModel.js';
const seedRouter= express.Router();

seedRouter.get('/', async (req, res )=>{
  await productModel.remove( {} );
  const createdProducts = await productModel.insertMany(data.products);
  
  await userModel.remove({});
  const createdUser = await userModel.insertMany(data.users) 
  res.send( {createdProducts, createdUser} );
});

export default seedRouter;