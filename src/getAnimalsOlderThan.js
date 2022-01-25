const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  data.species.find((specie) => specie.name === animal).every((ssss) => ());
}

module.exports = getAnimalsOlderThan;
