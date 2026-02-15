import express from "express"
import { headerdata, newdata, newinfo, querydata } from "../controller/reqController.js"

const requestRoute = express.Router()

requestRoute.post("/createdata",newdata)

requestRoute.get("/createinfo/:id",newinfo)

requestRoute.get("/querydata",querydata)

requestRoute.get("/headerdata",headerdata)



export default requestRoute


//http://localhost:5000/api/request/createdata
//http://localhost:5000/api/request/createinfo/641602
//http://localhost:5000/api/request/querydata
//http://localhost:5000/api/request/headerdata