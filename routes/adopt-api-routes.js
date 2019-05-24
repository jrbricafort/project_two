// Requiring our models
var db = require("../models");

module.exports = function(app) {

    // Get all the input
    app.get("/api/adopts", function(req, res) {
      db.Adopt.findAll({}).then(function(dbAdopt) {
        res.json(dbAdopt);
      });
    });
  
    // Create a new input
    app.post("/api/adopts", function(req, res) {
        db.Adopt.findAll({}).then(function(dbAdopt) {
            res.json(dbAdopt);
          });
    });
}