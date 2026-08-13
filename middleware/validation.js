const {body } = require("express-validator");

const validateSignUp = [
    body("firstName").notEmpty().trim().withMessage("First name is required"),
    body("lastName").notEmpty().trim().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Please enter a valid email address").normalizeEmail(),
    body("password").notEmpty().isLength({min:8}).withMessage("Password must be at least 8 characters long"),
    body("confirmPassword").notEmpty().withMessage("Please confirm your password").custom((value, {req}) => {
        if(value !== req.body.password) {
            throw new Error("Passwords do not match");
        }
        return true;
    }),
];

module.exports = {validateSignUp};