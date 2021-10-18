const router = require("express").Router();
const { regUser, loginUser } = require("../controlers/auth");


//Register
router.post("/register", regUser);

//Login
router.post("/login", loginUser);

module.exports = router;
