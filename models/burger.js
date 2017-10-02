// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Burger = sequelize.define("burger", {
  burger: {
    type: Sequelize.STRING
  },
  is_devoured: {
    type: Sequelize.BOOLEAN
  },
  taste: {
    type: Sequelize.STRING
  },
  created_at: {
    type: Sequelize.DATE
  }
}, {
  timestamps: false
});

// Syncs with DB
Burger.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burger;
