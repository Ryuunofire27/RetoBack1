const express = require ('express');
//const mongoose = require( 'mongoose');
const routes =require ('./routes/tvshows');
const bodyParser = require('body-parser');


const app = express();

/*mongoose.connect('mongodb://localhost/tvshows', (err,res) =>{
   if(err){
      console.log('ERROR: connecting to Database. ' + err);
   }else{
      console.log('Connected to Database');
   }
});
*/
//app.use(express.static(__dirname + '/public'));

//req.params devuelve un objetos de los parametros(:nombre) enviados
//req.query devuelve un objeto json de los parametros enviados
//(ruta?param1=value1&param2=ruta2)




app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req,res)=>{
   console.log(req.query);
});

app.post('/', (req,res)=>{
   res.send("Got a POST request");
});

app.put('/user', (req,res)=>{
   res.send('got a PUT request at /user');
});

app.delete('/user', (req,res) =>{
   res.send('Got a DELETE request at /user');
});



//app.listen(3000, console.log("abierto el puerto"));