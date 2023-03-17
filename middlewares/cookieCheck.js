module.exports = (req, res, next) => {
    if(req.cookies.mantenerSession && !req.session.user) {
        req.session.user = req.cookies.mantenerSession;
        res.locals.user = req.session.user;
    }  next ()
}