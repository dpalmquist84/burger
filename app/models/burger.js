// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a burger model that matches up with DB
var Burger = sequelize.define("burger", {
  burger: {
    type: Sequelize.STRING
  },
  taste: {
    type: Sequelize.STRING
  },
  is_devoured: {
    type: Sequelize.BOOLEAN
  }
}, {
  timestamps: false
});

// Syncs with DB
Burger.sync();

// Makes the burger Model available for other files (will also create a table)
module.exports = Burger;
