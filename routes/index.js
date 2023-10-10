var express = require('express')
var router = express.Router()
const { models } = require("../santuy/schema")
const { get, detail, create, update, remove, restore, raw } = require("santuy")


/* GET DATA. */
/* GET: http://localhost:3000/?model=users */
router.get('/', async function (req, res, next) {
  const modelName = req.query.model
  let page = req.query.page ?? ""
  let limit = req.query.limit ?? "10"
  const model = models[modelName]
  page = parseInt(page)
  limit = parseInt(limit)
  let payload = {
    model,
    paginate: page ? {
      page,
      limit
    } : null
  }
  const response = await get(payload)
  if (response) {
    res.send(response)

  } else {
    res.send({ message: "error" })
  }
})

/* GET DETAIL DATA. */
/* GET: http://localhost:3000/1/?model=users */
router.get('/:id', async function (req, res, next) {
  let id = req.params.id ?? ""
  const modelName = req.query.model
  const model = models[modelName]
  let payload = {
    model,
    id
  }
  const response = await detail(payload)
  if (response) {
    res.send(response)

  } else {
    res.send({ message: "error" })
  }
})

/* CREATE DATA. */
/* POST: http://localhost:3000/?model=users */
router.post('/', async function (req, res, next) {
  const modelName = req.query.model
  const model = models[modelName]
  const data = req.body
  let payload = {
    model,
    data
  }
  const response = await create(payload)
  if (response) {
    res.send(response)

  } else {
    res.send({ message: "error" })
  }
})

/* UPDATE DATA. */
/* PUT: http://localhost:3000/1/?model=users */
router.put('/:id', async function (req, res, next) {
  let id = req.params.id ?? ""
  const modelName = req.query.model
  const model = models[modelName]
  const data = req.body
  let payload = {
    model,
    data,
    id
  }
  const response = await update(payload)
  if (response) {
    res.send(response)

  } else {
    res.send({ message: "error" })
  }
})

/* DELETE DATA. */
/* DELETE: http://localhost:3000/1/?model=users */
router.delete('/:id', async function (req, res, next) {
  let id = req.params.id ?? ""
  const modelName = req.query.model
  const model = models[modelName]
  let payload = {
    model,
    id
  }
  const response = await remove(payload)
  if (response) {
    res.send(response)

  } else {
    res.send({ message: "error" })
  }
})

/* RESTORE DATA. */
/* PUT: http://localhost:3000/restore/1/?model=users */
router.put('/restore/:id', async function (req, res, next) {
  let id = req.params.id ?? ""
  const modelName = req.query.model
  const model = models[modelName]
  let payload = {
    model,
    id
  }
  const response = await restore(payload)
  if (response) {
    res.send(response)

  } else {
    res.send({ message: "error" })
  }
})

module.exports = router
