import express from 'express';
import { isAuth } from '../utils.js';
import orderModel from '../Models/orderModel.js'
const orderRouter = express.Router();

orderRouter.post('/', isAuth, async (req, res)=>{
const neworder = await new orderModel({
 orderItems: req.body.orderItems.map((x)=> ({...x, product: x._id})),
  shippingAddress: req.body.shippingAddress,
  paymentmethod: req.body.paymentmethod,
  itemsPrice: req.body.itemsPrice,
  taxPrice: req.body.taxPrice,
  totalPrice: req.body.totalPrice,
  user: req.user._id,
});
const order = await neworder.save();
res.status(201).send({message: 'New Order created', order});
});

orderRouter.get('/getall', isAuth, async (req, res)=>{
  const orderData = await orderModel.find({user: req.user._id});
if(orderData){
  res.send(orderData);

}else{
  res.status(404).send({message: 'Order not found'})

}


})

export default orderRouter;