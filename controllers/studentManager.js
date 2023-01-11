const Student = require("../models/Student")
const Class = require("../models/Classes")

const get = async (req, res) => {
    // Show list of all students in a single page

    const classes = await Class.findAll()
    const students = await Student.findAll()
    
    res.render("studentManager", {
        user : req.user,
        flash : req.flash(),
        students,
        classes
    })

}

const post = (req, res) => {

}

module.exports = {
    get,
    post
}