const Classes = require("../models/Classes")
const rankConverter = require("../helpers/rankConverter")

const get = async (req, res) => {
    const classes = await Classes.findAll({
        where : {
            teacherId : req.user.id
        }
    })

    res.render("teacherList", {
        flash : req.flash(),
        user : req.user,
        rankConverter,
        classes
    })
}

module.exports = {
    get
}
