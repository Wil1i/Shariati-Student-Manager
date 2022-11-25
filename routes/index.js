const express = require("express");
const { isUserNotLoggedIn, isUserLoggedIn, isUserManager } = require("../helpers/auth")
const Router = new express.Router();

const homePageController = require("../controllers/homePageController");
Router.get("/", isUserLoggedIn, isUserManager, homePageController.get);

const loginPageController = require("../controllers/loginPageController");
Router.get("/login",isUserNotLoggedIn , loginPageController.get);
Router.post("/login", isUserNotLoggedIn, loginPageController.post, loginPageController.loginSuccess)

const registerPageController = require("../controllers/registerPageController");
Router.get("/register", isUserLoggedIn, isUserManager, registerPageController.get);
Router.post("/register", isUserLoggedIn, isUserManager, registerPageController.post);

const studentsListPageController = require("../controllers/studentListPageController");
Router.get("/students/list", isUserLoggedIn, studentsListPageController.get);

const teacherListPageController = require("../controllers/teacherListPageController");
Router.get("/students/teacherlist", isUserLoggedIn, teacherListPageController.get);

module.exports = Router
