import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export default async function dbConnect() {

    try {
        // await mongoose.connect("mongodb+srv://admin:Ja8gdkuWFXplCp9X@myatlasclusteredu.oz9erij.mongodb.net/eshop?retryWrites=true&w=majority")
        // Since we installed dotenv, we can write
        await mongoose.connect(process.env.DB_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.log("Error connecting to DB", error.message)
    }

}

