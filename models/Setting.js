const { DataTypes } = require("sequelize")
const db = require("../configs/db")

const Setting = db.define("settings", {
    id : {
        type : DataTypes.NUMBER,
        autoIncrement : true,
        primaryKey : true
    },

    esm : {
        type: DataTypes.TEXT
    },

    meghdar : {
        type : DataTypes.TEXT
    }
}, {
    timestamps : false
})

module.exports = Setting