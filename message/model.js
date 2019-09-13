const Sequelize = require("sequelize")

const database = require("../database")

const Message = database.define("message", {
  text: Sequelize.STRING
})

module.exports = Message