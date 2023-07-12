import User from "../model/User.js"

export const handleListUsers = async (req, res) => {
    try {
        const users = await User.find()
        console.log(users)
        // res.send("Hello from users/list")
        res.send(users)
    } catch (error) {
        console.log(error.message)
    }

}

export const handleAddUsers = async (req, res) => {
    console.log(req.body)

    try {
        const newUser = await User.create(req.body)
        console.log(newUser)
        res.send("User inserted into database", newUser)
    } catch (error) {
        console.log("Error message here", error.message)
        res.send("Error in adding a user" + error.message)
    }

    // res.send("Hello from users/add")
    // res.send(req.body)
}

export const handleDeleteUsers = async (req, res) => {
    console.log(req.params)

    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.send("User deleted from database")
        console.log(deleteUser)
    } catch (error) {
        console.log("Error message here", error.message)
        res.send("Error in deleting a user" + error.message)
    }
}

export const handleEditUsers = async (req, res) => {
    console.log(req.body)

    try {
        const editedUser = await User.findByIdAndUpdate(req.body._id, req.body, { new: true })
        res.send("User edited ")
        console.log(editedUser)
    } catch (error) {
        console.log("Error message here", error.message)
        res.send("Error in editing a user" + error.message)
    }
}