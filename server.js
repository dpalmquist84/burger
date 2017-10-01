var express = require("express");
var bodyParser = require("body-parser");

var app = express();
const PORT = process.env.PORT || 3001;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P1rates1",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { burgers: data });
    });
  });
  
 
  app.get("/:id", function(req, res) {
    connection.query("SELECT * FROM burgers where id = ?", [req.params.id], function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      console.log(data);
      res.render("index", data[0]);
    });
  });
  
  app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger, description) VALUES (?, ?)", [
      req.body.burger, req.body.description
    ], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server faliure
        return res.status(500).end();
      }
  
      
      res.json({ id: result.insertId });
    });
  });
  
  app.delete("/api/burgers/:id", function(req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server faliure
        return res.status(500).end();
      } else if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  
 
  app.put("/api/burgers/:id", function(req, res) {
    connection.query("UPDATE burgers SET burger = ?, description = ? WHERE id = ?", [
      req.body.burger, req.body.description, req.params.id
    ], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server faliure
        return res.status(500).end();
      } else if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
