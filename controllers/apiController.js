const Student = require("../models/Student")

const get = async (req, res) => {
    switch (req.params.request) {
        case "getstinfo":
            const studentInformation = await Student.findByPk(req.query.studentId)
            (studentInformation) ? res.json(studentInformation) : res.status(404).send("Not Found")
            break;
    
        default:
            res.status(400).send("Bad Request")
            break;
    }
}

module.exports = {
    get
}