exports.ensureMember = (req,res,next) => {
    if(req.isAuthenticated() && req.user.is_member) {
        return next();
    }
    res.redirect("/");
};