const fs = require("fs")
const path = require("path")
const filePath = path.resolve(__dirname, "../data/users.json")
const usersArray = JSON.parse(fs.readFileSync(filePath, "utf8"))
const bcrypt = require("bcrypt");
const fetch = require("node-fetch");
const db = require("../database/models");
const { Op } = require("sequelize");

const generateID = () => {
    if (usersArray.length != 0) {
        const lastProduct = usersArray[Number(usersArray.length) - Number(1)];
        const lastID = Number(lastProduct.id) + Number(1);
        return lastID;
    } else {
        const lastID = 1
        return lastID;
    }
};

const controllers = {
    login: async(req, res) => {
        console.log(req.body);
        console.log(req.body.userlog);
        let isPasswordCorrect
        const userToLogin = await db.User.findAll({
            where: {
                email: {
                    [Op.like]: `${req.body.userlog}` //"%" + keyword + "%"
                }
            }
        })
        console.log("ESTE ES EL USUARIO ENCONTRADO");
        console.log(userToLogin);
        console.log("Contenido de userpass");
        console.log(req.body.userpass);
        console.log("Contenido de password");
        console.log(userToLogin[0].userPassword);

        if (userToLogin) {

            isPasswordCorrect = bcrypt.compare(req.body.userpass, userToLogin[0].userPassword)

            if (isPasswordCorrect) {

                delete userToLogin[0].userpass
                req.session.userLogged = userToLogin[0];
                if (req.body.remember_user) {
                    res.cookie("email", userToLogin[0].email, { maxAge: (100 * 60) * 10 });
                }
            }

        }
        if (isPasswordCorrect) {
            return res.redirect("/users/profile")
        } else {
            res.status(400).send("las credenciales son invalidas")

        }

    },
    logout: (req, res) => {
        res.clearCookie('email');
        req.session.destroy();
        return res.redirect("/")
    },
    edit: (req, res) => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(countries => {
                return res.render("userEdit", { user: req.session.userLogged, countries: countries })
            })
    },


    editP: async(req, res) => {
        console.log(req.session);
        let userToUpdate = await db.User.findByPk(req.session.userLogged.id, {
            include: {
                all: true
            }
        });
        console.log("USUARIO ENCONTRADO");
        console.log(userToUpdate);
        console.log("PARAMETROS DEL REQ");
        console.log(req.body);

       userToUpdate.userName=req.body.userName;
       userToUpdate.email=req.body.email;
       userToUpdate.birthdate=req.body.birthdate;
       userToUpdate.country=req.body.country;

       await userToUpdate.save();

        
        
        
        return res.redirect("/users/profile")
    },


    profile: async(req, res) => {

        let user = await db.User.findByPk(req.params.idUser, {
            include: {
                all: true
            }
        })
        console.log(req.session);
        res.render("usersProfile", {userData: req.session.userLogged})
        ;

    },
    register: async(req, res) => {
    
    const userStored = await db.User.create({

        userName: req.body.user,
        email: req.body.email,
        userPassword: bcrypt.hashSync(req.body.password, 10),
        adress: "Avenida Siempreviva 742",
        postCode: 7600,
        country: req.body.country,
        phone: "22355555555",
        birthdate: req.body.birthdate

        })

        res.redirect("/")

        
    }
}


module.exports = controllers;