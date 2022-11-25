const passport = require("passport");

const get = (req, res) => {
    res.render("login", {
        flash : req.flash(),
        user : req.user
    })
}

const post = (req, res) => passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
    session: true
})

const loginSuccess = (req, res) => {
    res.redirect(req.session.redirectTo || "/")
    delete req.session.redirectTo;
}

module.exports = {
    get,
    post,
    loginSuccess
}
