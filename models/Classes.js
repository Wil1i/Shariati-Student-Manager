const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Classes = db.define("classes", {
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey : true
    },

    paye : {
        type : DataTypes.NUMBER
    },

    reshte : {
        type : DataTypes.TEXT
    },

    rooz : {
        type : DataTypes.TEXT
    },

    startDate : {
        type : DataTypes.TEXT
    },

    dars : {
        type : DataTypes.TEXT
    },

    teacherId : {
        type : DataTypes.NUMBER
    }
}, {
    timestamps : false
})

module.exports = Classes