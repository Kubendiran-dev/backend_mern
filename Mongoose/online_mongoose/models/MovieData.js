import mongoose from "mongoose";


const MovieSchema = new mongoose.Schema({

    
  "movieData": {
    "movieName": {type:String},
    "ProducerName": {type:String},
    "DirectorName": {type:String},
    "accterName": {type:String},
    "acctressName": {type:String},
    "MovieType": {type:String},
    "movieLanguage": {type:String},
    "status": {type:String,default:"active"},
    "RealingDate": {type:String},
    "createdBy": {type:String,default:"admit"},
    "updatedBy": {type:String},
  }


  
},{timestamps:true})


const movieDataModel  = mongoose.model("movieData",MovieSchema)


export default movieDataModel