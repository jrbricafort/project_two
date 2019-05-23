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
      db.Adopt.create(req.body).then(function(dbPost) {
        res.json(dbPost);
      });
    });
  
    // Delete an example by id
//     app.delete("/api/examples/:id", function(req, res) {
//       db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//         res.json(dbExample);
//       });
//     });

}