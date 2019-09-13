const { Router } = require("express")

const Message = require("./model")

const factory = stream => {
  const router = new Router()

  router.get("/stream", (req, res) => {
    Message.findAll()
      .then(messages => {
        stream.updateInit(JSON.stringify(messages))
        return stream.init(req, res)
      })
  })

  router.post("/message", (req, res) => {
    Message.create({ text: req.body.text })
      .then(message => {
        stream.send(JSON.stringify(message.dataValues))
        return res.send(message)
      })
  })

  return router
}

module.exports = factory