/**
 * Server side app
 */

 console.log("Starting server side app ...");
 const express = require('express');
 const bodyParser = require('body-parser');

 var app = express();
 app.use(bodyParser.urlencoded({ extended: false}));
 app.use(bodyParser.json());

 console.log(__dirname);
 const NODE_PORT = process.env.PORT;

 app.use(express.static(__dirname + "/../dist/"));

 // get
 // post
 // put 
 // delete
 app.post("/api/register", (req, res)=>{
    var user = req.body;
    console.log(user);
    res.status(200).json(user);
 });

 app.listen(NODE_PORT, function(){
     console.log(`Backend Server started at ${NODE_PORT}`);
 })