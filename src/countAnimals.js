const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

const todoAnimal = () => {
  // eslint-disable-next-line array-callback-return
  const animalReduce = species.reduce((acc, currAnimal) => {
    acc[currAnimal.name] = currAnimal.residents.length;
  }, {});
  console.log(animalReduce);
  return animalReduce;
};
console.log(todoAnimal());



function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return todoAnimal;
  }
}
countAnimals();
module.exports = countAnimals;
