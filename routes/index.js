const express = require("express");
const Router = new express.Router();

const homePageController = require("../controllers/homePageController");
Router.get("/", homePageController.get);

const loginPageController = require("../controllers/loginPageController");
Router.get("/login", loginPageController.get);
Router.post("/login", loginPageController.post, loginPageController.loginSuccess)

const registerPageController = require("../controllers/registerPageController");
Router.get("/register", registerPageController.get);
Router.post("/register", registerPageController.post);

const studentsListPageController = require("../controllers/studentListPageController");
Router.get("/students/list", studentsListPageController.get);

const teacherListPageController = require("../controllers/teacherListPageController");
Router.get("/students/teacherlist", teacherListPageController.get);

module.exports = Router
