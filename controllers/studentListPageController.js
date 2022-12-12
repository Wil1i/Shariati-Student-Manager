const rankConverter = require("../helpers/rankConverter")
const Classes = require("../models/Classes")
const Qeybat = require("../models/Qeybat")

const get = async (req, res) => {
    const qeybats = await Qeybat.findAll()

    const classes = await Classes.findAll({
        where : {
            teacherId : req.user.id
        }
    })

    res.render("studentsList", {
        flash : req.flash(),
        user : req.user,
        rankConverter,
        classes,
        qeybats
    })
}

module.exports = {
    get
}
