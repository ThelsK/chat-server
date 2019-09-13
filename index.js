const express = require("express")
const Sse = require("json-sse")
const factory = require("./router")

const app = express()
const stream = new Sse()
const router = factory(stream)
const port = process.env.PORT || 4000

app.use(router)

app.listen(port, () =>
  console.log(`Listening on :${port}`))