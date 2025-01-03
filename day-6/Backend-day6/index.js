import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';

const app = express();

//middeleware for passing json request to body
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.use('/api/user', router);
//connect to mongodb
mongoose
    .connect(MONGOURL)
    .then(() => {
    console.log('MongoDB Connected'); 
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });  
})
.catch((err) => {   
    console.log(err);
});