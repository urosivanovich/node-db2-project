const Car = require('./cars-model')
const db = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)
    if(!car){
      next({status: 404, message: `car with id ${req.params.id} is not found`})
    }else{
      req.car = car
      next()
    }
  } catch(err){
    next(err)
  }

  
}

const checkCarPayload =  (req, res, next) => {
  const { vin, make, model, mileage } = req.body
  const error = {status: 400} 
  if(!vin){
    error.message = 'vin is missing'
  }
  else if(!make){
    error.message = 'make is missing'
  }
  else if(!model){
    error.message = 'model is missing'
  }
  else if(!mileage){
    error.message = 'mileage is missing'
  }
  if(error.message) {
    next(error)
  } else {
    next()
  }
}

const checkVinNumberValid =  (req, res, next) => {
  const { vin } = req.body
  if(vin.length < 17){
    res.status(400).json({message: `vin ${vin} is invalid`})
  }else{
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const vin = req.body.vin
  let cars = await Car.getAll()
  if(cars.map(car => car.vin).includes(vin)){
    res.status(400).json({message: `vin ${vin} already exists` })
  } else {
    next()
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
