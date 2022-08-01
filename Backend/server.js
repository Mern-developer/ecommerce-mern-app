import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import mongoose from "mongoose";
import seedRouter from "./Routers/SeedRouter.js";
import productsRouter from "./Routers/productsRouter.js";
import userRouter from "./Routers/userRouter.js";
import orderRouter from "./Routers/orderRouter.js";
// import paymentRouter from "./Routers/paymentRouter.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('MongoDB is connected...')
}).catch((err)=>{
    console.log(err.message);
});

app.use('/addingdata', seedRouter)
app.use('/api/products', productsRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use('/api/admin', productsRouter)


const port = 5000;

app.listen(port, ()=> {console.log(`server is running at http://localhost:${port}` );
});