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
  if (!req.user) {
    return res.status(403).render("error", config.errors["403"]);
  }

  const isUserTeacher = userPermissions.isUserTeacher(req.user)

  if (isUserTeacher) {
    next();
  } else {
    return res.status(403).render("error", config.errors["403"]);
  }
};

const isUserManager = async (req, res, next) => {
  if (!req.user) {
    return res.status(403).render("error", config.errors["403"]);
  }

  const isUserManager = userPermissions.isUserManager(req.user)

  if (isUserManager) {
    next();
  } else {
    return res.status(403).render("error", config.errors["403"]);
  }
};

const isUserDeveloper = async (req, res, next) => {
  if (!req.user) {
    return res.status(403).render("error", config.errors["403"]);
  }

  const isUserDeveloper = userPermissions.isUserDeveloper(req.user)

  if (isUserDeveloper) {
    next();
  } else {
    return res.status(403).render("error", config.errors["403"]);
  }
};

const isUserOwner = async (req, res, next) => {
  if (!req.user) {
    return res.status(403).render("error", config.errors["403"]);
  }

  const isUserOwner = userPermissions.isUserOwner(req.user)

  if (isUserOwner) {
    next();
  } else {
    return res.status(403).render("error", config.errors["403"]);
  }
};

module.exports = {
  isUserLoggedIn,
  isUserNotLoggedIn,
  isUserTeacher,
  isUserManager,
  isUserDeveloper,
  isUserOwner
};
