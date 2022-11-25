const rankConverter = require("../helpers/rankConverter")
const Classes = require("../models/Classes")

const get = async (req, res) => {
    const classes = await Classes.findAll({
        where : {
            teacherId : req.user.id
        }
    })

    res.render("studentsList", {
        flash : req.flash(),
        user : req.user,
        rankConverter,
        classes
    })
}

module.exports = {
    get
}
