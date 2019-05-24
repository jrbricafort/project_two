// Requiring our models
var db = require("../models");

module.exports = function(app) {

    // Get all the input
    app.get("/api/pets", function(req, res) {
      db.Pet.findAll({}).then(function(dbPet) {
        res.json(dbPet);
      });
    });
  
    // Create a new input
    app.post("/api/pets", function(req, res) {
        db.Pet.findAll({}).then(function(dbPet) {
            res.json(dbPet);
          });
    });
  


}