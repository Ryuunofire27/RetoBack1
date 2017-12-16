const TVShow = require ('../models/tvshow');

module.exports = app =>{
   const findAllTVShows = (req,res)=>{
      TVShow.find((err, tvshows) =>{
         if(!err){
            res.send(tvshows);
         }else{
            console.log('Error: ' + err);
         }
      });
   };

   const findById = (req,res) =>{
      TVShow.findById(req.params.id, (err, tvshow)=>{
         if(!err){
            res.send(tvshow);
         }else {
            console.log('ERROR: ' + err);
         }
      });
   };

   const addTVShow = (req,res)=>{
      console.log('POST');
      console.log(req.body);

      const tvshow = new TVShow({
         title: req.body.title,
         year: req.body.year,
         country: req.body.country,
         poster: req.body.poster,
         seasons: req.body.seasons,
         genre: req.body.genre,
         summary: req.body.summary
      });

      tvshow.save(err=>{
         if(!err){
            console.log('Created');
         }else{
            console.log('ERROR: '+ err);
         }
      });

      res.send(tvshow);
   };

   const updateTVShow = (req,res) =>{
      TVShow.findById(req.params.id, (err,tvshow) =>{
         tvshow.title = req.body.title;
         tvshow.year    = req.body.year;
         tvshow.country = req.body.country;
         tvshow.poster  = req.body.poster;
         tvshow.seasons = req.body.seasons;
         tvshow.genre   = req.body.genre;
         tvshow.summary = req.body.summary;

         tvshow.save(err=>{
            if(!err){
               console.log('Updated');
            }else{
               console.log('ERROR: ' + err);
            }

            res.send(tvshow);
         });

      });
   };

   const deleteTVShow = (req,res) =>{
      TVShow.findById(req.params.id, (err,tvshow) =>{
         tvshow.remove(err=>{
            if(!err){
               console.log('Removed');
            }else{
               console.log('ERROR: ' + err);
            }
            res.send(tvshow);
         });
      });
   };

   app.get('/tvshows', findAllTVShows);
   app.get('/tvshow/:id', findById);
   app.post('/tvshow', addTVShow);
   app.put('/tvshow/:id', updateTVShow);
   app.delete('/tvshow/:id', deleteTVShow);
};