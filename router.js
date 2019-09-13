const { Router } = require("express")

const messages = ["Hello!", "Goodbye!"]

const factory = stream => {
  const router = new Router()

  router.get("/stream", (req, res) => {
    stream.updateInit(JSON.stringify(messages))
    return stream.init(req, res)
  })

  router.post("/message", (req, res) => {
    messages.push(req.body.text)
    stream.send(JSON.stringify(messages))
    return res.send(req.body.text)
  })

  return router
}

module.exports = factory