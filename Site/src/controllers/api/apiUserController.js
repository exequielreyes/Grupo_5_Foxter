const fs = require('fs');
const path = require('path');
const db = require('../../database/models');
var sequelize = require('sequelize');



module.exports = {
    index: (req,res) => {
        db.User.findAll()
            .then((users) => {
               let userApi=[]
                users.forEach(user => {
                    let item={
                        id:user.idUser, 
                        name:user.name, 
                        lastName:user.lastName, 
                        email:user.email,
                        avatar: user.avatar,
                        detail:'http://localhost:3000/user/profile/'
                    }
                    userApi.push(item)
                });
               

                let respuesta={
                    count:users.length,
                    users: userApi
                }
                res.json(respuesta);
            })
    }

}