module.exports = {
    index: (req, res) => {
        res.render("home", {session: req.session});
    }
}