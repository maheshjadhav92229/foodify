import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




//app config
const app = express() 
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connections
connectDB();

//api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)


import dotenv from "dotenv"
//import orderRouter from "./routes/orderRoute.js"
dotenv.config({ path: "uploads/.env" })
console.log("JWT_SECRET VALUE:", process.env.JWT_SECRET)





app.get("/",(req,res)=>{
res.send("API Working")
})


app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://mahesh:mahesh@cluster0.6xqsvx6.mongodb.net/?appName=Cluster0