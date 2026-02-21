import express from "express"
import { addData, getData } from "../controller/dataSave.js"


const movieRoute = express.Router()

movieRoute.post("/add",addData)

movieRoute.get("/get/:id", getData)


export default movieRoute


//http://localhost:5000/api/movieroute/add

//http://localhost:5000/api/movieroute/get/69996ee44f11fc8ec7299494