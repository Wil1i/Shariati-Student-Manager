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
        qeybats,
    })
}

const post = async (req, res) => {
    if(req.query.action == "movajah" && req.query.id){
        const findStudent = await Qeybat.findByPk(req.query.id)
        if(!findStudent) return res.status(404).send("Not Found")
        findStudent.update({noeQeybat : "movajah"})
        res.status(200).send("DONE")
        return
    }else{
        res.status(404).send("Not Found")
        return
    }
    res.status(200).send("OK")
}

module.exports = {
    get,
    post
}
