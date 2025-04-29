//server.js file
import express from 'express';
import dotenv from 'dotenv';
import messageRoutes from './routes/message.routes.js'; 
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import cookieParser  from 'cookie-parser';
import userRoutes from './routes/user.routes.js'
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());
// Middleware 
app.use(cookieParser());
app.use("/Eyob/auth", authRoutes);
app.use("/Eyob/messages", messageRoutes);
app.use("/Eyob/users", userRoutes);

// app.get('/', (req, res) => {
    // res.send('Hello World!');
// });



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});
