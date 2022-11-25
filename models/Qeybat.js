const { DataTypes } = require("sequelize")
const persianDate = require("persian-date")
const db = require("../configs/db")

const Qeybat = db.define("qeybats", {
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey: true
    },

    studentID : {
        type : DataTypes.NUMBER
    },

    byID : {
        type : DataTypes.NUMBER
    },

    tarikh : {
        type : DataTypes.TEXT
    },

    noeQeybat : {
        type : DataTypes.TEXT
    },

    peygiri : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

Qeybat.getDate = () => {
    return new persianDate().format()
}

module.exports = Qeybat