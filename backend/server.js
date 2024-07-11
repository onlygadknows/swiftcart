import path from 'path';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/config.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
const port = process.env.PORT;
const app = express()

import { ALLOWED_ORIGIN } from './utils/allowedOrigin.js';



// app.use(cors({
//     origin: 'http://localhost:5173', 
//     credentials: true, 
//   }));

const corsOptions = {
    origin: ALLOWED_ORIGIN,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  };
  app.use(cors(corsOptions));

    
connectDB(); // connect to MongoDB

//body parser middleware

app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie parser middleware - allow to access cookies and the jwt
app.use(cookieParser())


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);
app.get('/api/config/paypal', (req, res) => res.send({clientId: process.env.PAYPAL_CLIENT_ID}));

const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads'))); // Correctly set up static file serving
app.use('/product_images', express.static(path.join(__dirname, 'dist', 'product_images')));

if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    //any route that is not api will be redirected to index.html
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
 );
} else {
    app.get('/', (req, res) => {
        res.send('API is running')
    });
    
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`))