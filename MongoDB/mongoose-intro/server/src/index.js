import cors from "cors"
import express from "express"
import dotenv from "dotenv"
import dbConnect from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()
dbConnect()

const app = express()

app.use(express.json()) // handle body object from requests

app.use(cors())

app.use('/users', userRoutes)

app.listen(3001, () => console.log("Server is up and runing"))