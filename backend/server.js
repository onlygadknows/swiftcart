import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/config.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
const port = process.env.PORT || 8000;
const app = express()
app.use(cors());
connectDB(); // connect to MongoDB

//body parser middleware

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie parser middleware - allow to access cookies and the jwt
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('API is running')
});

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))