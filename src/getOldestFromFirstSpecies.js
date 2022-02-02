const data = require('../data/zoo_data');

const { employees, species } = data;

const animalCuidado = (id) => employees.find((empregado) => empregado.id === id).responsibleFor[0];

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const arrayAnimais = species.find((animal) => animal.id === animalCuidado(id))
    .residents.sort((age1, age2) => age2.age - age1.age);
  return [arrayAnimais[0].name, arrayAnimais[0].sex, arrayAnimais[0].age];
}

module.exports = getOldestFromFirstSpecies;
