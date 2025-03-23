import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import path from 'path'
import authRoutes from './routes/auth.route.js';

dotenv.config(); // Load environment variables at the beginning

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('MongoDB connection error:', err));


const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html' ))
});

app.use(express.json());

app.use(cookieParser());



app.listen(3000, () => {
    console.log('Server is running on port 3000!');
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// middleware to handle errors
app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statuscode).json({
        success: false,
        message,
        statuscode,
    })
});
