const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

const todoAnimal = () => {
  const animalReduce = species.reduce((acc, currAnimal) => {
    const { name, residents } = currAnimal;
    acc[name] = residents.length;
    return acc;
  }, {});
  return animalReduce;
};

function filterAnimal(para1) {
  const value = Object.values(para1);
  if (value.length > 1) {
    const arrayFilter = species
      .find((currAnimal) => currAnimal.name === value[0]).residents
      .filter((currAnimal) => currAnimal.sex === value[1]).length;
    return arrayFilter;
  }
  const arrayFind = species.find((currAnimal) => currAnimal.name === value[0]).residents.length;
  return arrayFind;
}

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return todoAnimal();
  }
  return filterAnimal(animal);
}

module.exports = countAnimals;
