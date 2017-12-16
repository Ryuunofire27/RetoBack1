import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/tvshows';
import bodyParser from 'body-parser';

const app = express();

mongoose.connect('mongodb://localhost/tvshows', (err) =>{
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