const usersDB = []
let id = 1

// {
// 	id: 1,
// 	firstName: 'Laura',
// 	lastName: 'Cabrera',
// 	email: 'laura@nielsen.com',
// 	password: 'root',
// 	birthday: '1967/08/15'
// }

const findAllUsers = () => {
    return usersDB
}

const findUserById = (id) => {
    const filteredUser = usersDB.find(item => item.id == id)
    return filteredUser
}

const createNewUser = (obj) => {
    const newUser = {
        id: id++,
        firstName: obj.firstName,
        lastName: obj.lastName,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}