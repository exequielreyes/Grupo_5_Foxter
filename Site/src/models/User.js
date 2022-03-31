const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../../data/user.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const User = {
    allUsers: () => {
        return users;
    },

    // generateId: () => {
    //     const allUsers = users.slice(0);
    //     let lastUser = allUsers.pop();
    // // let lastUser = users[users.length - 1].id;
    //    if (lastUser) {
    //      return lastUser.id + 1;
    //    } else { return 1;}
    // },

    findById: (id) => {
        let userFound = users.find(user => user.id === id);
        return userFound;
    },

    //buscar por campo
    findByField: (field, text) => {
        let userFound = users.find(user => user[field] === text);
        return userFound;
    },

    create: (userData) => {

        let newUser = {
			id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
			...userData
		}
        
        users.push(newUser);
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        return newUser;
    },

    delete: (id) => {
        let finalUsers = users.filter(user => user.id !== id);
        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
    }
}

module.exports = User;