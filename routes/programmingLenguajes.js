const express = require("express")
const router = express.Router()
const programminLenguaje = require("../services/programmingLenguaje")

router.get("/", async function (req, res, next) {
  try {
    res.json(await programminLenguaje.read(req.query.page))
  } catch (err) {
    console.error(err.message)
    next(err)
  }
})

router.post("/", async function (req, res, next) {
  try {
    res.json(await programminLenguaje.create(req.body))
  } catch (err) {
    console.error(err.message)
    next(err)
  }
})

router.patch("/", async function (req, res, next) {
  try {
    res.json(await programminLenguaje.update(req.body.id, req.body))
  } catch (err) {
    console.error(err.message)
    next(err)
  }
})
module.exports = router
