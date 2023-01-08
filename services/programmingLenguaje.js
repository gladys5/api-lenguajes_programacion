const db = require("./db")
const helper = require("../helper")
const config = require("../config")

async function create(programminLanguaje) {
  const resultado = await db.query(`INSERT INTO lenguajes_programacion
    (nombre,anio_salida,github_rank)
    VALUES
    (
        '${programminLanguaje.nombre}',
        '${programminLanguaje.anio_salida}',
       ' ${programminLanguaje.github_rank}'
    )
    `)
  let message = "Error al actualizar el lenguaje de programacion"
  if (resultado.affectedRows) {
    message = "la peticion se realizo con exito"
  }
  return { message }
}
async function update(id, programminLanguaje) {
  const resultado = await db.query(`
    UPDATE lenguajes_programacion
    SET nombre= '${programminLanguaje.nombre}',
    anio_salida= '${programminLanguaje.anio_salida}',
    github_rank=' ${programminLanguaje.github_rank}' WHERE id ='${id}'
    `)
  let message = "Error al actualizar el lenguaje de programacion"
  if (resultado.affectedRows) {
    message = "la peticion se realizo con exito"
  }
  return { message }
}

async function read(page = 1) {
  const offset = helper.getOffSet(page, config.listPerPage)
  const rows = await db.query(` 
        SELECT *FROM lenguajes_programacion LIMIT ${offset},${config.listPerPage}`)
  // SELECT *FROM lenguajes_programacion LIMIT ${offset},${config.listPerPage}`
  const data = helper.emptyRows(rows)
  const metadata = { page }
  return {
    data,
    metadata,
  }
}

module.exports = {
  read,
  create,
  update,
}
