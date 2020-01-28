const express = require('express');
const router = express.Router();
var bodyparser = require('body-parser');
var mysql = require('mysql');
 
var data =[{
    id :"4",
    name :"apple",
    price :"100"
    }];

var currId=4;
router.use(bodyparser.json());

    var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'11112222',
        database:'appdata'
    
    });
    // con.connect(function(err) {
    //     if (err) throw err;
    //     console.log("Connected!");
    // });
      

router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     message : 'handling get requests to /products',
    //     products: saAfrray
    // });
    con.query("SELECT DISTINCT * FROM Orders",function(err,result,fields){
        if(err) throw err;
        console.log(result);
        Object.assign(data,result);
        //data=result;
        //console.log({data:data});
        res.send({data:data});
        //res.status(200).json({result : result});
        //res.status(200).json(result);
        //console.log(res);
        //res.json();
    });
    
});


router.post('/',(req,res,next)=>{
    var prodName = req.body.name;
    var prodPrice = req.body.price;
    currId++;
    data.push({
        id:currId,
        name:prodName,
        price:prodPrice
    });
    let statement = "INSERT INTO Orders(OrderName,Price) VALUES('"+prodName+"','"+prodPrice+"')";
    con.query(statement,function(err,result,fields){
        if(err) throw err;
        console.log(result);
        res.send('successfully created product')
    })

    ///res.send('successfully created product')
});
/*
router.post('/',(req,res,next)=>{
    var prodName = req.body.name;
    var prodPrice = req.body.price;
    let sql ="INSERT INTO Orders (OrderName,Price) values ('pencil',3);"
})*/

router.put('/:id',(req,res,next)=>{
    var id = req.params.id;
    var newName = req.body.name;
    var newPrice = req.body.price;
    //var found =false;
    console.log(id+" new name is:  " +newName+" new price is :"+newPrice);

    let statement = "UPDATE Orders SET OrderName='"+newName+"',Price='"+newPrice+"' WHERE Id='"+id+"'";
    con.query(statement,function(err,result,fields){
        if(err)throw err;
        console.log(result);
        res.send("successfully updated");
    })

})


router.delete('/:id',(req,res,next)=>{
    var id = req.params.id;
    let statement = "DELETE FROM Orders WHERE Id='"+id+"'";
    
    con.query(statement,function(err,result,fields){
        if(err) throw err;
        console.log(result);
        res.send("the table with id="+id+" is deleted");
    })
})






module.exports = router;


/*
router.post('/',(req,res,next)=>{
    res.status(201).json({
        message : 'handling post requests to /products'
    });
});

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id==='special'){
        res.status(200).json({
            message : 'you discovered special Id',
            id : id
        });
    }
    else{
        res.status(200).json({
            message : 'you passed an id',
            id : id
        });
    }
});


router.patch('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'updated!'
    });
});

router.delete('/:productId',(req,res,next)=>{
    res.status(200).json({
        message:'deleted the product!'
    });
});
*/

// const data =[
//     {
//         name:"sju",
//         kl:"ass",
//         hmm:"1213"
//     }
// ]

/*
var data =[ 
        {
        id :"1",
        name :"apple",
        price :"100"
        },
        {id :"2",
        name :"pineapple",
        price :"130"
        },
        {id :"3",
        name :"orange",
        price :"80"
        },
        {id :"4",
        name :"watermelon",
        price :"200"
        }
    
    ];*/