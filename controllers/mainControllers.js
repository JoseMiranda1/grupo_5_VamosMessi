const controllers = {
    home: (req, res) => {
        res.render("home");
    },
    cambiosDevoluciones: (req, res) => {
        res.render("cambiosDevoluciones");
    },
    terminosCondiciones: (req, res) => {
        res.render("terminosCondiciones")
    },
    politica: (req, res) => {
        res.render("politica")
    },
    informacion: (req, res) => {
        res.render("informacion")
    },


}
module.exports = controllers;