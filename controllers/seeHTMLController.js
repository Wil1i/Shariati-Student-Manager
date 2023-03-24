const get = (req, res) => {
    if(req.params.fileName){
        res.render("templates/html/" + req.params.fileName)
    }else{
        res.send("<h1 style='color=red'>Select a file!</h1>")
    }
}

module.exports = {
    get
}