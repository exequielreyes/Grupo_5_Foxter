const path = require("path");
const { mainModule } = require("process");

module.exports = {
    index: (req, res) => {
        res.render("index");
    }
}