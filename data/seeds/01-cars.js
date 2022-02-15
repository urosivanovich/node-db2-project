// STRETCH
exports.seed = function(knex) {
    return knex('cars').truncate()
    .then(function () {
        return knex('cars').insert([
            {vin: 'qwewq12', make: 'Mercedes-Benz', model:'GLA', mileage: 23000, title: 'clean', transmission: 'automatic'},
            {vin: 'dddsa', make: 'Aston Martin', model:'Vanquish', mileage: 0, title: 'clean', transmission: 'manual'},
            {vin: 'asdasd', make: 'Yugo', model:'Coral55', mileage: 999999, title: 'clean', transmission: 'manual'},
        ])
    })
}
