import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoute.js"
import cors from "cors"

dotenv.config()

const app = express()



app.use(cors())

app.use(express.json())

app.use("/api/route",authRoutes)

//console.log(process);

const PORT = process.env.PORT || 3000;

//console.log(PORT);


app.listen(PORT,()=>{
    console.log(`server running successfully http://localhost:${PORT}`);
})


//API LINK FOR ABCD Methods - http://localhost:5000/api/route