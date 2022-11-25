const User = require("../models/User")

const get = (req, res) => {
    res.render("register", {
        flash : req.flash(),
        user : req.user
    })
}

const post = async (req, res) => {
    const isUserExist = await User.findOne({
        where : {
            username : req.body.username.toLowerCase()
        }
    }) || false

    if(isUserExist){
        req.flash("danger", "نام کاربری غیر قابل استفاده است")
        return res.redirect("/register")
    }else{
        if(req.body.phoneNumber && req.body.phoneNumber.length == 11){
            await User.create({
                username : req.body.username.toLowerCase(),
                password : await User.encryptPassword(req.body.password),
                realName : req.body.realName,
                phoneNumber : req.body.phoneNumber,
                userRank : "teacher"
            })
    
            req.flash("success", "حساب کاربری مورد نظر با موفقیت ساخته شد.")
        }else{
            req.flash("danger", "در وارد کردن شماره تلفن دقت کنید. (۰۹۰۰۰)")
            return res.redirect("/register")
        }
        
    }

    res.redirect("/login")
}

module.exports = {
    get,
    post
}
