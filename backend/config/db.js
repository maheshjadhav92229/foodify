import  mongoose from "mongoose"

 export const connectDB = async()=>{
  await mongoose.connect('mongodb+srv://mahesh:mahesh@cluster0.6xqsvx6.mongodb.net/food-del')
  .then(()=>console.log("db connected"));
}