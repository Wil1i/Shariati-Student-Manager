const Qeybat = require("../models/Qeybat")
const toFarsiNumber = require("../helpers/toFarsiNumber")
const rankConverter = require("../helpers/rankConverter")

const get = async (req, res) => {
    const qeybats = await Qeybat.findAll()

    res.render("index", {
        flash : req.flash(),
        user : req.user,
        qeybats,
        toFarsiNumber,
        rankConverter
    })
}

module.exports = {
    get
}
