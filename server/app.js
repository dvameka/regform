/**
 * Server side app
 */

 console.log("Starting server side app ...");
 /* start : import libs */
 const express = require('express');
 var cors = require('cors')
 const bodyParser = require('body-parser');
 const fs = require('fs');
/* end : import libs */
 
 var app = express();
 app.use(bodyParser.urlencoded({ extended: false}));
 app.use(bodyParser.json());
 app.use(cors());
 console.log(__dirname);
 const NODE_PORT = process.env.PORT;

 app.use(express.static(__dirname + "/../dist/"));
/*
 var reviews  = [{
    rating : 5,
    by: 'Ricky',
    comment: 'This is cool product !',
    thumbsUp: 1,
    isVerifiedPurchase: true
  },
  {
    rating : 4,
    by: 'Kenneth',
    comment: 'Awesome product !',
    thumbsUp: 1,
    isVerifiedPurchase: true
  }]

  var products = [
      {productid: 1,
      desc: "Milo"},
      {productid: 2,
      desc: "Horlicks"},
      {productid: 3,
      desc: "Nescafe"}         
  ]*/

  var jsonData;
  console.log(__dirname + '/data.json');
  fs.readFile(__dirname + '/data.json', 'UTF-8', function(err, data){
      if(err){
          throw err;
      }
      jsonData = JSON.parse(data);
  });
 // get
 // post
 // put 
 // delete
 app.post("/api/user/register", (req, res)=>{
    //console.log(req);
    var user = req.body;
    console.log(user);
    user.age = 40;
    jsonData.push(user);
    fs.writeFile(__dirname + '/data.json', JSON.stringify(jsonData), 'utf8', function(data){
        console.log(data);
        res.status(200).json(jsonData);
    });
 });

 function callback(result){
    console.log(result);
 }

 /*
 app.get("/api/product/reviews", (req, res)=>{
    res.status(200).json(reviews);
 });

 app.get("/api/product/list", (req, res)=>{
    console.log(products);
    res.status(200).json(products);
 });*/


 app.listen(NODE_PORT, function(){
     console.log(`Backend Server started at ${NODE_PORT}`);
 })