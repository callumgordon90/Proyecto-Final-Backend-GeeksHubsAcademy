const router = require("express").Router();
const authController = require("../controllers/auth.controller");
const userController = require("../controllers/user.controller");


//authorisation (register/login/logout)
router.post("/register" , authController.signUp);

// user display: 'block' (show all of the users in the database),
router.get('/',userController.getAllUsers);

module.exports = router;

