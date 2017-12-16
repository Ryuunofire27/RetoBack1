const express = require ('express');
const mongoose = require( 'mongoose');
const routes =require ('./routes/tvshows');
const bodyParser = require('body-parser');


const app = express();

mongoose.connect('mongodb://localhost/tvshows', (err,res) =>{
   if(err){
      console.log('ERROR: connecting to Database. ' + err);
   }else{
      console.log('Connected to Database');
   }
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.listen(3000);