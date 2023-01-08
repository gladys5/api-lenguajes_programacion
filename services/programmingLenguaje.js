const db = require("./db")
const helper = require("../helper")
const config = require("../config")
async function getmultiple(page = 1) {
  const offset = helper.getOffSet(page, config.listPerPage)
  const rows = await db.query(` 
        SELECT *FROM lenguajes_programacion LIMIT ${offset},${config.listPerPage}`)
  const data = helper.emptyRows(rows)
  const metadata = { page }
  return {
    data,
    metadata,
  }
}
module.exports = {
  getmultiple,
}
