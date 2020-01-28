const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');


//connecting to database

router.get('/',(req,res,next)=>{
    res.render('homePage.ejs');
});

 router.post('/ordersPost',(req,res,next)=>{
    
    res.send("you have sent"+ req.body.name);
    res.end();
 });



module.exports = router;






//require('./ProductButtonJS');
//const morgan = require('morgan');
//app.use( express.static( "public" ));
// const data =[ 
//     {
//     id :"1",
//     name :"apple",
//     price :"100"
//     },
//     {id :"2",
//     name :"pineapple",
//     price :"130"
//     },
//     {id :"3",
//     name :"orange",
//     price :"80"
//     },
//     {id :"4",
//     name :"watermelon",
//     price :"200"
//     }

// ];


/*

router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     message : 'order were fetched!'
    // });
    //res.sendFile(__dirname+'/index.html');
    res.render('ProductButton.ejs');
});
router.get('/getItems',(req,res,next)=>{
    res.status(200).json(data);
});

router.post('/',(req,res,next)=>{
    res.status(201).json({
        message : 'order were created!'
    });
});
/*
router.get('/:orderId',(req,res,next)=>{
    res.status(201).json({
        message : 'order details!',
        orderId : req.params.orderId
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(201).json({
        message : 'order deleted!',
        orderId : req.params.orderId
    });
});    
    */