orm = require("./config/orm.js")


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })

module.exports = orm;