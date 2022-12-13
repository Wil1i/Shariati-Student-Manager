const { DataTypes } = require("sequelize");
const db = require("../configs/db");

const Student = db.define("students", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true
    },

    firstName : {
        type : DataTypes.TEXT
    },

    lastName : {
        type : DataTypes.TEXT
    },

    class : {
        type : DataTypes.TEXT
    },

    reshte : {
        type : DataTypes.TEXT
    },

    fatherNumber : {
        type: DataTypes.TEXT
    },

    motherNumber : {
        type : DataTypes.TEXT
    },

    profile : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = Student;