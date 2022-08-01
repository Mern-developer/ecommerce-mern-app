import express from 'express'
import userModel from '../Models/userModel.js';
import bcrypt from 'bcrypt'
import { generateToken } from '../utils.js';
const saltRounds = 10;
const userRouter = express.Router();

userRouter.post('/signin', async (req, res)=>{
     const user = await userModel.findOne({email: req.body.email})
     if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }

     }   

});

 userRouter.post('/signUp', async(req, res)=>{
   const newuserModel = new userModel({
     name: req.body.name,
     email: req.body.email,
    password: bcrypt.hashSync(req.body.password, saltRounds),
  });
  const user = await newuserModel.save();
  res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
             });  
 })

export default userRouter;