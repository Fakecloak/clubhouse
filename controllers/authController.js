const bcrypt = require("bcrypt");
const db = require("../db/queries");
const { validationResult } = require("express-validator");
const  passport = require("passport");

exports.signUpGet = (req, res ) => {
    res.render("./auth/sign-up", {errors: [], formData: {} });
}

exports.signUpPost = async (req,res,next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
    return res.status(400).render("auth/sign-up", {
        errors: errors.array(),
        formData: req.body,
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
    res.render("./auth/login", {formData: {}, errors: [], });
}

exports.loginPost = (req, res, next) => {
    passport.authenticate('local', { 
        successRedirect: '/',
        failureRedirect: '/auth/login',
        failureMessage: true 
    })(req, res, next);
};