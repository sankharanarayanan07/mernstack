const express=require('express');
const app=express();
const userRouter = require('./routes/user');

app.use('/user',userRouter)

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("index.ejs");
});

app.get('/about',(req,res)=>{
    res.send("This is about page");
});

app.listen(3000);

