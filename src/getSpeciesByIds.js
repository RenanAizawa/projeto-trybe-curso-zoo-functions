// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui mais um novo passo ao mundo!
  return data.species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
