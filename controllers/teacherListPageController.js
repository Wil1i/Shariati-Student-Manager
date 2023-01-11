const Classes = require("../models/Classes")
const Setting = require("../models/Setting")
const Student = require("../models/Student")
const Qayeb = require("../models/Qeybat")
const rankConverter = require("../helpers/rankConverter")
const ntt = require("../helpers/numberToText")

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
        if(i + 1 == startTimeClasses.length){
            startDate = `${startTimeHours}:${startTimeMinutes}`
        }else{
            if(hour >= startTimeHours && hour < parseInt(startTimeClasses[i + 1].split(":")[0])){
                if(hour == startTimeHours){
                    if(minute >= startTimeMinutes) startDate = `${startTimeHours}:${startTimeMinutes}`
                }else startDate = `${startTimeHours}:${startTimeMinutes}`
            }else if(hour < startTimeHours && minute < startTimeMinutes) break
        }
    }

    let kelas = await Classes.findOne({
        where : {
            teacherId : req.user.id,
            startDate : startDate,
        }
    })

    if(kelas){
        const students = await Student.findAll({
            where : {
                class : ntt(kelas.paye, 1),
                reshte : kelas.reshte
            }
        })
        
        res.render("teacherList", {
            flash : req.flash(),
            user : req.user,
            rankConverter,
            students,
            kelas,
            ntt
        })
    }else{
        // ! No class render here
    }
    
}

const post = async (req, res) => {
    const nextStudentInformation = await Student.findByPk(parseInt(req.query.studentId) + 1)
    if(req.query.action == "qayeb"){
        await Qayeb.create({
            studentID : req.query.studentId,
            byID : req.user.id,
            tarikh : "ADD IT",
            noeQeybat : "qeyreMovajah",
            peygiri : "no"
        }).then(() => {
            res.json(nextStudentInformation || {ok : "no"})
        })

    }else if(req.query.action == "naMoshakhas"){
        await Qayeb.create({
            studentID : req.query.studentId,
            byID : req.user.id,
            tarikh : "ADD IT",
            noeQeybat : "naMoshakhas",
            peygiri : "no"
        }).then(() => {
            res.json(nextStudentInformation || {ok : "no"})
        })
    }else{
        res.json(nextStudentInformation || {ok : "no"})
    }
}

module.exports = {
    get,
    post
}
