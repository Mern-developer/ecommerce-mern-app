import express from "express";
import path from "path";
import dotenv from 'dotenv';
import cors from "cors";
import seedRouter from "./Routers/SeedRouter.js";
import productsRouter from "./Routers/productsRouter.js";
import userRouter from "./Routers/userRouter.js";
import orderRouter from "./Routers/orderRouter.js";
import connectDatabase from "./confiq/MongoDb.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();
connectDatabase();

app.use('/addingdata', seedRouter)
app.use('/api/products', productsRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use('/api/admin', productsRouter)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res)=> res.sendFile(path.join(__dirname, '/frontend/build/index.html')));

const port = 5000;

app.listen(port, ()=> {console.log(`server is running at http://localhost:${port}` );
});











