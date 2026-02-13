
import { createuser } from "../controllers/userControllers.js"
import express from "express"

//API LINK FOR ABCD Methods - http://localhost:5000/api/route/dataroute/user

const route = express.Router()


route.post("/dataroute/user",createuser)


export default route