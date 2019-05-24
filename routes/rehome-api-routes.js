// Requiring our models
var db = require("../models");

module.exports = function (app) {

    // Get all the input
    app.get("/api/rehomes", function (req, res) {
        db.Rehome.findAll({}).then(function (dbRehome) {
            res.json(dbRehome);
        });
    });

    // Create a new input
    app.post("/api/rehomes", function (req, res) {
        db.Rehome.findAll({}).then(function (dbRehome) {
            res.json(dbRehome);
        });
    });
}