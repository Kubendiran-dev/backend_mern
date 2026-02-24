import express from "express"
import { addData, Delete, getData, update} from "../controller/dataSave.js"


const Route = express.Router()

Route.post("/add",addData)

Route.get("/get/:id",getData)

Route.put("/update/:id",update)

Route.delete("/delete/:id",Delete)

export default Route


//http://localhost:5000/api/department/add 

//http://localhost:5000/api/department/get/699da4e46e2d6acbf8e82d40

//http://localhost:5000/api/department/update/699da4e46e2d6acbf8e82d40

//http://localhost:5000/api/department/delete/699dd63cf53e9a515a39c9fb