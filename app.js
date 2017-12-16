import express from 'express';
import users from './resources/user';
import mongoose from 'mongoose';
import routes from './routes/tvshows';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

const app = express();

mongoose.connect('mongodb://localhost/tvshows', (err,res) =>{
   if(err){
      console.log('ERROR: connecting to Database. ' + err);
   }else{
      console.log('Connected to Database');
   }
});

//app.use(express.static(__dirname + '/public'));

//req.params devuelve un objetos de los parametros(:nombre) enviados
//req.query devuelve un objeto json de los parametros enviados
//(ruta?param1=value1&param2=ruta2)




app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/:id', (req,res)=>{
   /*console.log(req.params);
   res.send(req.params.id);*/
   const id = req.params.id;
   let nombre="no coincide con ningun id";
   users.map(user=>{
      console.log(user.id + " " + user.nombre);
      if(user.id == id) nombre = user.nombre;
   });
   console.log(nombre);
   res.send(nombre);
});

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



app.listen(3000, console.log("abierto el puerto"));