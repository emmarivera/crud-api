//? file's  imports
const usersControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    const data = usersControllers.findAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id
    const data = usersControllers.findUserById(id)
    if (data) {
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }
}

const postNewUser = (req, res) => {

    const {firstName, lastName, email, password, birthday} = req.body

    if(firstName && lastName && email && password && birthday){
        const data = usersControllers.createNewUser({firstName, lastName, email, password, birthday})
        res.status(201).json(data)
    } else {
        res.status(400).json({message: 'Invalid Data', fields: {
            firstName: "string",
            lastName: "string",
            email : "example@example.com",
            password: "string",
            birthday: "aaaa/mm/dd"
        }})
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}