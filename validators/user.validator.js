const {check} = require("express-validator");

const insertUserValidAtion = [
    check("user_first_name").notEmpty().withMessage("First name is required"),
    check("user_last_name").notEmpty().withMessage("Last name is required"),
    check("user_password").notEmpty().withMessage("Password is empty"),
    check("user_password").isLength({min: 6}).withMessage("Your password is too short"),
    check("user_password").isStrongPassword().withMessage("Your password is not strong"),
    check("user_email").isEmail().withMessage("Please enter a valid email"),  
];

const updateUserValidAtion = [
    check("user_id").notEmpty().withMessage("user ID is required"),
    check("user_first_name").notEmpty().withMessage("First name is required"),
    check("user_last_name").notEmpty().withMessage("Last name is required"),
    check("user_password").notEmpty().withMessage("Password is empty"),
    check("user_password").isLength({min: 6}).withMessage("Your password is too short"),
    check("user_password").isStrongPassword().withMessage("Your password is not strong"),
    check("user_email").isEmail().withMessage("Please enter a valid email",)   
];

module.exports = {
    insertUserValidAtion,
    updateUserValidAtion,
}