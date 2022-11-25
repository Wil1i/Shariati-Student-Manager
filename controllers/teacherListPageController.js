const rankConverter = require("../helpers/rankConverter")

const get = (req, res) => {
    res.render("teacherList", {
        flash : req.flash(),
        user : req.user,
        rankConverter
    })
}

module.exports = {
    get
}
