/* REQUIRES */
const {validationResult} = require("express-validator");
const {users, writeUsersJson} = require("../data")

module.exports = {
    index: (req, res) => {
        res.locals.user = req.session.user;
        return res.render('formulario', {
            session : req.session,
            old: req.body
        })
    },
    processFormulario: (req, res) => {

        let errors = validationResult(req);
        
        if(errors.isEmpty()) {

            let user = req.body;
        
            req.session.user = {
            name: user.name,
            colores: user.colores,
            email: user.email,
            edad: user.edad
        }

            if(req.body.recordar) {
                res.cookie("mantenerSession", req.session.user, { expire: new Date( Date.now() + 180000), httpOnly: true})
            }

            res.locals.user = req.session.user

            res.render('formulario')
        } else {
            res.render("formulario", {
                errors: errors.mapped(),
                old : req.body,
                session: req.session
            })
        }

        },
        user: (req, res) => {
            res.locals.user = req.session.user
            res.render("user", {
                name : req.session.user.name,
                backgroundColor : req.session.user.colores,
                session: req.session
            })
        },
        logOut: (req, res) => {
            req.session.destroy();
        if(req.cookies.mantenerSession){
            res.cookie("mantenerSession", "", {maxAge: -1})
        }

        res.redirect("/");

        }

}