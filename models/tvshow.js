import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tvshowSchema = new Schema({
   title: {type: String},
   year: {type: Number},
   country: {type: String},
   poster: {type: String},
   seasons: {type: Number},
   genre: {type: String,
      enum: ['Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy']
   },
   summary: {type: String}
});

export default mongoose.model('TVShow', tvshowSchema);