const path = require("path");
const { mainModule } = require("process");

module.exports = {
    login: (req, res) => {
        res.render('usuario/login');
    },

    register: (req, res) => {
        res.render("usuario/register");
    }
}