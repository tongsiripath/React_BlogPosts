import express from "express";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import postRoute from "./routes/posts.js"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser())

app.use(cors())
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)





app.listen(8080,()=>{
    console.log("------> Server Running");
})

