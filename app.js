const express = require('express');
const app = express();
const morgan = require('morgan');
app.use(express.static('public'))
app.set('view engine','ejs');
const mysql = require('mysql');
const router = express.Router();
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
app.use(morgan('dev'));
let fs = require('fs');


app.use('/products',productRoutes);
app.use('/',orderRoutes);







// app.get('/',(req,res,next)=>{
//     //res.status(200).json({message:"hi there"});
// res.render('index.html');
// });










app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            error : error.message
        }
    });
});



module.exports = app;