import express from "express"
import cors from "cors"
import { users } from './users.js'

const app = express()

app.use(cors())

app.get('/users/list', (req, res) => {
    // res.send("Hello from Server at port 4000")
    res.send({ users })
})

app.listen(4000, () => console.log("Server is up and running at the port 4000"))