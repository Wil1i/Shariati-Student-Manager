const Student = require("../models/Student")
const Class = require("../models/Classes")
const toFarsiNumber = require("../helpers/toFarsiNumber")

const get = async (req, res) => {
    // Show list of all students in a single page

    const classes = await Class.findAll()
    const students = await Student.findAll()
    
    res.render("studentManager", {
        user : req.user,
        flash : req.flash(),
        students,
        classes,
        toFarsiNumber
    })

}

const post = async (req, res) => {
    if(req.query.action == "deleteStudent"){
        const findStudent = await Student.findByPk(req.body.id)
        if(findStudent){
            await findStudent.destroy()
            res.send("Successfully deleted")
        }else{
            res.status(403).send("Not Found")
        }
    }
}

module.exports = {
    get,
    post
}