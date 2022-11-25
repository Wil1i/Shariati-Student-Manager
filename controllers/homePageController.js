const Qeybat = require("../models/Qeybat")
const toFarsiNumber = require("../helpers/toFarsiNumber")
const rankConverter = require("../helpers/rankConverter")
const Classes = require("../models/Classes")

const get = async (req, res) => {
    const qeybats = await Qeybat.findAll()
    const classes = await Classes.findAll({
        where : {
            teacherId : req.user.id
        }
    })

    res.render("index", {
        flash : req.flash(),
        user : req.user,
        qeybats,
        toFarsiNumber,
        rankConverter,
        classes
    })
}

module.exports = {
    get
}
