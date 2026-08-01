const bcrypt = require("bcrypt");
const db = require("../db/queries");
const { validationResult } = require("express-validator");

exports.signUpGet = (req, res ) => {
    res.render("./auth/sign-up");
}

exports.signUpPost = async (req,res,next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
    return res.status(400).render("sign-up", {
        errors: errors.array(),
    });
    }
    
    try {
        const {
        firstName,
        lastName,
        email,
        password,
        } = req.body;

        const existingUser = await db.getUserByEmail(email);

        if (existingUser) {
            res.send("Email already exists")
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.createUser({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        res.redirect("./auth/login");

    } catch(err) {
        next(err)
    }

};

exports.loginGet = (req, res) => {
    res.render("./auth/login");
}