const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const countAnimal = data.species
    .filter((bicho) => ({ bicho: bicho.residents }));
  console.log(countAnimal);
  return countAnimal;
}
countAnimals();
module.exports = countAnimals;
