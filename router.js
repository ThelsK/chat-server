const { Router } = require("express")

const messages = ["Hello!", "Goodbye!"]

const factory = stream => {
  const router = new Router()

  router.get("/stream", (req, res) => {
    stream.updateInit(JSON.stringify(messages))
    stream.init(req, res)
  })

  return router
}

module.exports = factory