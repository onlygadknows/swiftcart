import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/config.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const port = process.env.PORT || 8000;
const app = express()
app.use(cors());
connectDB(); // connect to MongoDB


app.get('/', (req, res) => {
    res.send('API is running')
});

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))