const rankConverter = require("../helpers/rankConverter")
const Classes = require("../models/Classes")
const Qeybat = require("../models/Qeybat")
const Student = require("../models/Student")

const get = async (req, res) => {
    if(!req.query.action){
        let qeybats;
        if(req.query.qeybat == "nameh") 
            { qeybats = await Qeybat.findAll({where : {noeQeybat: "baNameh"}}) }
        else if(req.query.qeybat == "qeyreMovajah") 
            { qeybats = await Qeybat.findAll({where : {noeQeybat: "qeyreMovajah"}}) }
        else if(req.query.qeybat == "movajah")
            { qeybats = await Qeybat.findAll({where : {noeQeybat: "movajah"}}) }
        else if(req.query.qeybat == "hozoor")
            { qeybats = await Qeybat.findAll(); req.flash("warning", "در حال حاضر در دسترس نمی باشد") }
        else
            qeybats = await Qeybat.findAll()


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
        return res.status(200).send("Done")
    }else return res.status(404).send("Not Found")
}

module.exports = {
    get,
    post
}
