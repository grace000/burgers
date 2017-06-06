//Collect data using orm, send it to burgers.js, use burgers.js to send data to front end

// Import the ORM to create functions that will interact with the database.
//code that will call the ORM functions using burger specific input for the ORM.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      //cb(res) being sent to controller, will send data to front end
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function (condition, cb){
    orm.delete('burgers', condition, function(res){
      //send response to callback
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
