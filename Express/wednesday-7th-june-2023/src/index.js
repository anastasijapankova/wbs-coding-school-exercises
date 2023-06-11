import express from "express";
import { users } from "./users.js"
// console.log(express)

const app = express()
// console.log(app)

app.listen(8500, () => console.log("Server is up and running at port 8500"))

app.get('/listusers', handleListUsers)
app.get('/listone', handleListOneUser)
app.get('/searchbyemail/:email', handleSeacrhByEmail)

function handleListUsers(req, res) {
    // console.log('handleListUsers here!')
    console.log('All users listed!')
    // res.send('Hello from handleListUsers')
    res.send(users)
}

function handleListOneUser(req, res) {

    console.log("Req.query", req.query)
    // res.send(req.query)
    // console.log('handleListOneUser here!')
    // res.send('Hello from handleListOneUser')

    const result = users.filter((item) => item.name === req.query.name);
    console.log("result:", result);

    res.send({
        success: true,
        result
    })
}

function handleSeacrhByEmail(req, res) {
    console.log(req.params)

    const result = users.filter((item) => item.email === req.params.email);
    console.log("result:", result);


    res.send({
        success: true,
        result
    })
}