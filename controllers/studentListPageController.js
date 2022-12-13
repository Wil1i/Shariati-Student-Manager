const rankConverter = require("../helpers/rankConverter")
const Classes = require("../models/Classes")
const Qeybat = require("../models/Qeybat")
const Student = require("../models/Student")

const get = async (req, res) => {
    if(!req.query.action){
        const qeybats = await Qeybat.findAll()

        const classes = await Classes.findAll({
            where : {
                teacherId : req.user.id
            }
        })

        const students = await Student.findAll()
    
        res.render("studentsList", {
            flash : req.flash(),
            user : req.user,
            rankConverter,
            classes,
            qeybats,
            students
        })
    }else if(req.query.action == "information" && req.query.id){
        const studentInformation = await Student.findByPk(req.query.id)
        res.json(studentInformation)
    }
    
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
