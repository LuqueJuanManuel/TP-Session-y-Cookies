const express = require("express");
const router = express.Router();
const controller = require("../controllers/formularioController");
const validateRegister = require("../validation/validateRegister");
const cookieCheck = require('../middlewares/cookieCheck')

/* RUTA - register */
router.get("/",cookieCheck, controller.index); 
router.post("/", validateRegister, controller.processFormulario);
router.get("/user",cookieCheck, controller.user);
router.get('/logOut',cookieCheck, controller.logOut);


module.exports = router;