const mongoose=require('mongoose');

// Creation of Schema 
const movieSchema=mongoose.Schema({
    movieName:String,
    movieDirector:String,
    movieDescription:String,
    moviePrice:Number
})
const movieData=mongoose.model('movie',movieSchema);            //to map the data with schema we can use - const Data=mongoose.model('collectioname',Schemaname);


// the below code is used to export the schema to the main file
module.exports=movieData;