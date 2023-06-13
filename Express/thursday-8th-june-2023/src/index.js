import express from "express"
import { users } from './users.js'

const app = express()

app.use(express.json())

app.listen(6000, () => console.log("Server is up and running at port 6000"))

app.get('/users/list', (req, res) => {
    res.send(users)
    console.log(users) // localhost:6000/users/list
})

app.post('/users/add', handleUserAdd) // in the path: a noun, then a verb
app.delete('/users/delete', handleDeleteUser)

function handleUserAdd(req, res) {
    // console.log(req.body)
    // res.send('UserAdd request received')

    users.push(req.body)
    res.send('User is added succesfully')
    console.log(users)
}

function handleDeleteUser(req, res) {
    const user = req.query.name
    // console.log(req.query)

    // let usersArray = users.filter(item => item.name !== req.query.name)
    // let usersArray = users.filter(item => item.name.toLowerCase() !== req.query.name.toLowerCase()) // option toLowerCase everything
    // console.log(usersArray)

    let usersArray = users.filter(item => item.name !== req.body.name) // the same thing but we pass data via the body
    console.log(usersArray)

    res.send('deleted here')
}

app.put('/users/edit', handleEditUser)

function handleEditUser(req, res) {
    console.log(req.body)

    const newUsers = users.map((element) => {
        if (element.name === req.body.name) {
            element = req.body
        }
        return element;
    });
    console.log(newUsers)
    res.send("Put here")
}


app.patch('/users/patch', handlePatchUser)

function handlePatchUser(req, res) {
    console.log(req.body)

    const newUsers = users.map((element) => {
        if (element.name === req.body.name) {
            element = { ...element, ...req.body }
        }
        return element;
    });
    console.log(newUsers)

    res.send("Patch here")
}