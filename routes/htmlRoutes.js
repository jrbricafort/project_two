var path = require("path");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  // rehome route loads rehome.html
  app.get("/rehome", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/rehome.html"));
  });

  // homepage route loads homepage.html
  app.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  // adopt route loads adopt.html
  app.get("/adopt", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adopt.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
