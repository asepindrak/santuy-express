var express = require('express')
var router = express.Router()
const { raw } = require("santuy")

/* RAW QUERY. */
/* GET: http://localhost:3000/raw/ */
router.get('/raw', async function (req, res, next) {

  const response = await raw("SELECT * FROM users")
  if (response) {
    res.send(response)

  } else {
    res.send({ message: "error" })
  }
})

module.exports = router
