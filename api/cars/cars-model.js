const db = require('../../data/db-config')

const getAll = async () => {
  const rows = await db('cars')
  return rows
}

const getById = (id) => {
  return db('cars').where('id', id).first()
}

const create = async (car) => {
  const [id] = await db('cars').insert(car)
  return getById(id)
}

module.exports = {
  getAll, getById, create
}
