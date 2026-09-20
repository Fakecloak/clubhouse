const db = require("../db/queries");

exports.indexGet = async(req,res, next) => {
    try{
        const messages = await db.getAllMessages();
        
        res.render("index", {title: "clubhouse", messages});
    }catch(err){
        next(err);
    }
    
};

exports.joinGet = (req, res) => {
    res.render("join", {errors: []});
};

exports.joinPost = async(req,res,next) => {
    try{
        const { passcode } = req.body;
        
        if(passcode !== process.env.MEMBER_PASSCODE) 
        {
            return res.status(400).render("join", {
                errors:[{msg: "Incorrect Passcode"}],
            });
        }

        await db.makeUserMember(req.user.id);
        res.redirect("/");
        
    }catch(err){
        next(err);
    }
}

exports.adminGet = (req, res) => {
    res.render("admin", {title: "Welcome Admin", errors: []});
}

exports.adminPost = async(req,res,next) => {
    try{
        const {passcode} = req.body;

        if(passcode !== process.env.ADMIN_PASSCODE)
        {
            return res.status(400).render("admin", {
                errors: [{msg: "Incorrect Admin Passcode"}],
            });
        }

        await db.makeUserAdmin(req.user.id);
        res.redirect("/");

    } catch(err){
        next(err);
    }
}