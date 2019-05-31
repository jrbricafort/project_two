// Requiring our models
var db = require("../models");

//Requiring node mailer
const nodemailer = require("nodemailer");

module.exports = function (app) {

    // Get all the input
    app.get("/api/rehomes", function (req, res) {
        db.Pet.findAll({}).then(function (dbRehome) {
            res.json(dbRehome);
        });
    });

    // Create a new input
    app.post("/api/rehomes", function (req, res) {
        db.Pet.create(req.body).then(function (dbRehome) {
            res.json(dbRehome);
        });
    });

    // Get all the input
    app.get("/api/pets", function (req, res) {
        db.Pet.findAll({}).then(function (dbPet) {
            res.json(dbPet);
        });
    });

    // Create a new input
    app.post("/api/pets", function (req, res) {
        var userSelection = JSON.parse(JSON.stringify(req.body, null, 2));
        var sum = 0;
        var arr = [];
        console.log(JSON.stringify(req.body, null, 2));
        for (const key in userSelection) {
            arr.push(userSelection[key])
        }
        for (var i = 2; i < arr.length; i++) {
            // sum = sum + Number(arr[i]);
            sum += Number(arr[i]);
        }
        console.log(sum)
        var searchType = "";
        if (sum >= 15) {
            //Get Dogs
            searchType = "Dog"
        } else {
            //Get cats
            searchType = "Cat"
        }
        db.Pet.findAll({
            where: {
                petType: searchType
            }
        }).then(function (dbResult) {
            res.json(dbResult);
        });

    });

    app.post("/api/emailInfo", function (req, res) {
        var petInfo = JSON.parse(JSON.stringify(req.body, null, 2));
        console.log(petInfo);

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            secure: true,
            auth: {
                user: "pawzrescuephilly@gmail.com",
                pass: 'Pawzrescue1!'
            }
        });
        var mailOptions = {
            from: "Pawz",
            to: petInfo.email,
            subject: "Adoption Info",
            text: 'Name: ' + petInfo.petName + '\n\n' + 'Image: ' + petInfo.petUrl + '\n\n' + 'Gender: ' + petInfo.petGender + '\n\n' + 'FunFacts: ' + petInfo.petFacts
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            }
            else {
                res.status(200).json({
                    message: 'Email successully Sent',
                });
            }
        });
    });
}