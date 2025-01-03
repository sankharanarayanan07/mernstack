const express=require('express');
let router = express.Router();


router.get('/userinfo',(req,res)=>{
    res.send("This is user page");
});
router.get('/contact',(req,res)=>{
    res.send("This is contact page");
});
router.post('CreateUser',(req,res)=>{
    res.send("Add new user");
});

router
    .route('/:id')
    .get((req,res)=>{
        console.log(req.usery);
        res.send("retrive user with id "+req.params.id);
    })
    .put((req,res)=>{
        res.send("update user with id "+req.params.id);
    })
    .delete((req,res)=>{
        res.send("delete user with id "+req.params.id);
    });

    const users = require({name:"raja"},{name:"rani"},{name:"sepoy"});

    router.param('id',(req,res,next,id)=>{
        console.log(id);
        req.usery = users[id];
        next();
    });

module.exports = router;

