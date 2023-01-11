const config = require("../configs/config.json");
const userPermissions = require("./userPermissions")

// ?----------- Check if user is logged in
const isUserLoggedIn = (req, res, next) => {
  if (!req.user) {
    req.flash("warning", "برای دیدن این صفحه وارد شوید");
    req.session.redirectTo = req.url;
    return res.redirect("/login");
  }

  next();
};

// ?----------- Check if user is not logged in
const isUserNotLoggedIn = (req, res, next) => {
  if (req.user) return res.redirect("/");
  next();
};

const isUserTeacher = async (req, res, next) => {
  if (!req.user) return res.status(403).render("error", config.errors["403"]);

  const isUserRankTeacher = userPermissions.isUserTeacher(req.user)

  if (isUserRankTeacher) next();
  else return res.status(403).render("error", config.errors["403"]);
};

const isUserManager = async (req, res, next) => {
  if (!req.user) return res.status(403).render("error", config.errors["403"]);

  const isUserRankManager = await userPermissions.isUserManager(req.user)

  if (isUserRankManager) {
    next();
  } else {
    const isUserRankTeacher = await userPermissions.isUserTeacher(req.user)
    if(isUserRankTeacher) return res.redirect("/students/teacherlist")
    else return res.status(403).render("error", config.errors["403"]);
  }
};

const isUserDeveloper = async (req, res, next) => {
  if (!req.user) return res.status(403).render("error", config.errors["403"]);

  const isUserRankDeveloper = userPermissions.isUserDeveloper(req.user)

  if (isUserRankDeveloper) next();
  else return res.status(403).render("error", config.errors["403"]);
};

const isUserOwner = async (req, res, next) => {
  if (!req.user) return res.status(403).render("error", config.errors["403"]);

  const isUserRankOwner = userPermissions.isUserOwner(req.user)

  if (isUserRankOwner) next();
  else return res.status(403).render("error", config.errors["403"]);
};

module.exports = {
  isUserLoggedIn,
  isUserNotLoggedIn,
  isUserTeacher,
  isUserManager,
  isUserDeveloper,
  isUserOwner
};
