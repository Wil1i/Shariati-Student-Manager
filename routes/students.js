const express = require("express");
const uploader = require("../helpers/uploader")
const { isUserNotLoggedIn, isUserLoggedIn, isUserManager } = require("../helpers/auth")
const Router = new express.Router();

const studentsListPageController = require("../controllers/studentListPageController");
Router.get("/list", isUserLoggedIn, isUserManager,studentsListPageController.get);
Router.post("/list", isUserLoggedIn, isUserManager, studentsListPageController.post)

const teacherListPageController = require("../controllers/teacherListPageController");
Router.get("/teacherlist", isUserLoggedIn, teacherListPageController.get);
Router.post("/teacherlist", isUserLoggedIn, teacherListPageController.post)

const studentManagerController = require("../controllers/studentManager")
Router.get("/manage", isUserLoggedIn, isUserManager, studentManagerController.get)

module.exports = Router