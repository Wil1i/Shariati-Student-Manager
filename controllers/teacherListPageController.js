const Classes = require("../models/Classes")
const Setting = require("../models/Setting")
const Student = require("../models/Student")
const rankConverter = require("../helpers/rankConverter")

const get = async (req, res) => {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()

    let startTimeClasses = await Setting.findOne({
        where : {
            esm : "startClassesTime"
        }
    })

    startTimeClasses = startTimeClasses.meghdar.split("|")

    let startDate;

    for(let i = 0; i < startTimeClasses.length; i++){
        const startTime = startTimeClasses[i].split(":")

        const startTimeHours = parseInt(startTime[0])
        const startTimeMinutes = parseInt(startTime[1])

        if(hour >= startTimeHours && minute >= startTimeMinutes)
            startDate = `${startTimeHours}:${startTimeMinutes}`
    }

    let kelas = await Classes.findAll({
        where : {
            teacherId : req.user.id
        }
    })

    kelas = kelas.find(x => x.startDate = startDate)
    if(kelas[0] && kelas[0].id) {
        kelas = kelas[0].id
    }else if(kelas['id']) kelas = kelas['id']

    const students = await Student.findAll({
        where : {
            class : kelas
        }
    })    

    const classes = await Classes.findAll({
        where : {
            teacherId : req.user.id
        }
    })

    res.render("teacherList", {
        flash : req.flash(),
        user : req.user,
        rankConverter,
        classes,
        students
    })
}

module.exports = {
    get
}
